import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
                      <Image src="/logo.png" alt="TracKing" width={120} height={36} priority style={{ height: '36px', width: 'auto' }} />
                    </a>
            <span className="font-bold text-white text-lg">TracKing</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#roles" className="hover:text-white transition-colors">Para quién</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            TracKing SaaS © 2026
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          Construido con NestJS · Prisma · PostgreSQL · React Native · Next.js
        </div>
      </div>
    </footer>
  )
}
