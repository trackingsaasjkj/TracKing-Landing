import net from 'node:net'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

const mode = process.argv[2]
if (mode !== 'dev' && mode !== 'start') {
  console.error('Usage: node scripts/run-next.mjs <dev|start> [next args...]')
  process.exit(1)
}

const rawArgs = process.argv.slice(3)

function extractPort(args) {
  let port
  const filtered = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg === '-p' || arg === '--port') {
      const value = args[i + 1]
      if (value && !value.startsWith('-')) {
        port = parseInt(value, 10)
        i++
        continue
      }
    }
    if (arg.startsWith('--port=')) {
      port = parseInt(arg.split('=')[1], 10)
      continue
    }
    if (arg.startsWith('-p') && arg.length > 2) {
      port = parseInt(arg.slice(2), 10)
      continue
    }
    filtered.push(arg)
  }
  return { port, filtered }
}

const { port: argPort, filtered } = extractPort(rawArgs)
const envPort = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined
const startPort = Number.isInteger(argPort) ? argPort : Number.isInteger(envPort) ? envPort : 5173

function canBind(port, host) {
  return new Promise((resolve) => {
    const server = net.createServer()
    server.unref()
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE' || err.code === 'EACCES') resolve(false)
      else if (err.code === 'EADDRNOTAVAIL' || err.code === 'EAFNOSUPPORT') resolve(true)
      else resolve(false)
    })
    server.once('listening', () => {
      server.close(() => resolve(true))
    })
    server.listen(port, host)
  })
}

async function isPortAvailable(port) {
  const hosts = ['0.0.0.0', '127.0.0.1', '::']
  for (const host of hosts) {
    const ok = await canBind(port, host)
    if (!ok) return false
  }
  return true
}

async function findAvailablePort(start) {
  for (let port = start; port <= start + 200; port++) {
    if (await isPortAvailable(port)) return port
  }
  throw new Error(`No se encontró un puerto disponible entre ${start} y ${start + 200}`)
}

try {
  const port = await findAvailablePort(startPort)
  if (port !== startPort) {
    console.log(`Puerto ${startPort} en uso, usando ${port}...`)
  } else {
    console.log(`Iniciando Next.js (${mode}) en puerto ${port}...`)
  }

  const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next')
  const child = spawn(process.execPath, [nextBin, mode, '-p', String(port), ...filtered], {
    stdio: 'inherit',
    cwd: root,
    env: { ...process.env, PORT: String(port) },
  })

  const forward = (signal) => {
    if (!child.killed) child.kill(signal)
  }
  process.on('SIGINT', () => forward('SIGINT'))
  process.on('SIGTERM', () => forward('SIGTERM'))

  child.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal)
      return
    }
    process.exit(code ?? 0)
  })
} catch (err) {
  console.error(err.message || err)
  process.exit(1)
}
