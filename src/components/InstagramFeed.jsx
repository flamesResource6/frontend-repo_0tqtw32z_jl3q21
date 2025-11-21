import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Placeholder: uses static images; can be replaced with Instagram Basic Display API later
const PLACEHOLDER = [
  'https://images.unsplash.com/photo-1515548213164-63da22a6e0c7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1623820913667-dc0d2eb3320e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200&auto=format&fit=crop',
]

export default function InstagramFeed(){
  const [imgs, setImgs] = useState(PLACEHOLDER)
  useEffect(()=>{ setImgs(PLACEHOLDER) },[])
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">From Instagram</h2>
        <a className="text-fuchsia-700 hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">Follow us</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {imgs.map((src, i) => (
          <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="aspect-square overflow-hidden rounded-xl">
            <img src={src} alt="Instagram post" className="w-full h-full object-cover hover:scale-105 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
