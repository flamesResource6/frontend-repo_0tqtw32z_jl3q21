import { motion } from 'framer-motion'

const FEATURES = [
  { title: 'Premium Quality', desc: 'Hand-selected textures and long-lasting fibers.', icon: '✨' },
  { title: 'Fast Delivery', desc: 'Nationwide shipping with careful packaging.', icon: '🚚' },
  { title: 'Secure Payments', desc: 'Stripe and Paystack with Apple/Google Pay.', icon: '🔒' },
  { title: 'Expert Installation', desc: 'Skilled crochet and braiding services.', icon: '💇🏽‍♀️' },
]

export default function WhyChooseUs(){
  return (
    <section className="relative bg-gradient-to-b from-white to-fuchsia-50/40 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
