import { motion } from 'framer-motion'

export default function FooterCTA(){
  return (
    <section className="relative bg-gradient-to-br from-fuchsia-600 via-fuchsia-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-3xl md:text-4xl font-extrabold">Elevate Your Essence</h2>
          <p className="mt-2 text-white/90">Shop premium textures or book an expert crochet/braiding session.</p>
        </motion.div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="flex gap-4 md:justify-end">
          <a href="/shop" className="px-6 py-3 rounded-full bg-white text-fuchsia-700 font-semibold hover:-translate-y-0.5 transition shadow-lg">Shop Now</a>
          <a href="/book" className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-white/10 transition">Book Installation</a>
        </motion.div>
      </div>
    </section>
  )
}
