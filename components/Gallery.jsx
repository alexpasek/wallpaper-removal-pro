
'use client';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
export default function Gallery({ images, itemClass='h-56' }){
  const [open, setOpen] = useState(null);
  return (<>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <button key={i} className="card overflow-hidden" onClick={() => setOpen(src)}>
          <img src={src} alt={`Image ${i+1}`} className={`${itemClass} w-full object-cover transition-transform duration-300 hover:scale-105`} />
        </button>
      ))}
    </div>
    {open && <Lightbox src={open} onClose={() => setOpen(null)} />}
  </>);
}
