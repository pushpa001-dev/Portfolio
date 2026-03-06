import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Home