import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function FeaturedProducts(){
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${backend}/products?featured=true`).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  }, [])

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Products</h2>
        <a href="/shop" className="text-fuchsia-700 hover:underline">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p, idx) => (
          <motion.a key={p.id || idx} href={`/product/${p.id}`} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:idx*0.05}} className="group rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition">
            <div className="aspect-square overflow-hidden">
              <img src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-fuchsia-700 font-semibold mt-1">₦{Number(p.price).toLocaleString()}</p>
            </div>
          </motion.a>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-slate-500">No featured products yet. Add some in the admin later.</div>
        )}
      </div>
    </section>
  )
}
