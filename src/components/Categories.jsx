import { motion } from 'framer-motion'

const CATS = [
  { key: 'crochet', label: 'Crochet Hair', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1200&auto=format&fit=crop' },
  { key: 'extensions', label: 'Hair Extensions', img: 'https://images.unsplash.com/photo-1616394584738-fc6e6125b0d9?q=80&w=1200&auto=format&fit=crop' },
  { key: 'accessories', label: 'Accessories', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop' },
  { key: 'installation', label: 'Installation', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop' },
]

export default function Categories(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Shop by Category</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATS.map((c, i) => (
          <motion.a key={c.key} href={`/shop?category=${c.key}`} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group relative overflow-hidden rounded-2xl shadow ring-1 ring-black/5">
            <img src={c.img} alt={c.label} className="w-full h-56 object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">{c.label}</div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
