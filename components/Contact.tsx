'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    tipoEmpresa: '',
    mensaje: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = `Nombre: ${form.nombre}\nNombre de la empresa: ${form.empresa}\nTipo de empresa: ${form.tipoEmpresa}\nMensaje: ${form.mensaje}`
    const url = `https://wa.me/573166161362?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">Contacto</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">Hablemos por WhatsApp</h2>
          <p className="text-gray-500">Completa el formulario y te responderemos por WhatsApp.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-[#F4F6FA] border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1.5">Nombre de la empresa</label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              required
              value={form.empresa}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition"
            />
          </div>

          <div>
            <label htmlFor="tipoEmpresa" className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de empresa</label>
            <input
              id="tipoEmpresa"
              name="tipoEmpresa"
              type="text"
              required
              value={form.tipoEmpresa}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
          >
            Enviar por WhatsApp
            <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
