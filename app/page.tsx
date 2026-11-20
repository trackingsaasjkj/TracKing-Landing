import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Roles from '@/components/Roles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Roles />
      <Contact />
      <Footer />
    </main>
  )
}
