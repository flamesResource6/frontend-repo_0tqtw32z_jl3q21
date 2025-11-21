import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-fuchsia-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-[120%] h-[120%] -left-10 -top-10 absolute bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_10%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(217,70,239,0.12),transparent_40%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}}>
          <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium">Extensions Essence by Abisola</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 text-slate-900">
            Your Hair, Your Essence
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Premium crochet hair, extensions, wigs, and accessories. Elegant styles with expert installation services.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#shop" className="px-6 py-3 rounded-full bg-fuchsia-600 text-white font-semibold shadow-lg shadow-fuchsia-600/30 transition hover:-translate-y-0.5 hover:shadow-xl">Shop Now</a>
            <a href="#book" className="px-6 py-3 rounded-full border-2 border-fuchsia-600 text-fuchsia-700 font-semibold hover:bg-fuchsia-50 transition">Book Installation</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.8, delay:0.1}} className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop" alt="Model hair" className="w-full h-full object-cover" />
          </div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8, delay:0.2}} className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-xl ring-1 ring-black/5">
            <p className="text-sm text-slate-700"><span className="font-semibold text-fuchsia-700">Premium</span> textures for every look.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
