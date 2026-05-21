'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { STATS } from '@/lib/constants'


export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#F4F6FA] pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#3B82F6]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-[2fr_2.4fr] gap-8 lg:gap-12 items-center">

        {/* ── Left: copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
            Tracking en tiempo real
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Gestiona tu empresa de mensajeria{' '}
            <span className="text-[#2563EB]">en tiempo real</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            TracKing centraliza tus operaciones de mensajería: asignación de servicios,
            seguimiento GPS, evidencias de entrega y liquidaciones. Todo en una sola plataforma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Crear empresa gratis <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#2563EB] text-gray-700 hover:text-[#2563EB] font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-[#2563EB]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: promo video ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="block"
        >
          {/* Outer browser frame */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

            {/* Browser chrome */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 border border-gray-200 ml-2">
                app.tracking.com/dashboard
              </div>
            </div>

            {/* Video */}
            <video
              src="/TrackingPromo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
