import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
import WhyChooseUs from './components/WhyChooseUs'
import InstagramFeed from './components/InstagramFeed'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-fuchsia-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-fuchsia-700 text-lg">Extensions Essence</a>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-fuchsia-700" href="/shop">Shop</a>
            <a className="hover:text-fuchsia-700" href="/book">Book a Service</a>
            <a className="hover:text-fuchsia-700" href="/about">About</a>
            <a className="hover:text-fuchsia-700" href="/faqs">FAQs</a>
            <a className="hover:text-fuchsia-700" href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <WhyChooseUs />
        <InstagramFeed />
        <FooterCTA />
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Extensions Essence by Abisola</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-fuchsia-700">Instagram</a>
            <a href="mailto:hello@example.com" className="hover:text-fuchsia-700">Email</a>
            <a href="/policies" className="hover:text-fuchsia-700">Policies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
