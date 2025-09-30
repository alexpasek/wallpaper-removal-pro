
'use client';
import { useEffect } from 'react';
export default function Lightbox({ src, alt, onClose }){
  useEffect(()=>{ const h = e => { if (e.key === 'Escape') onClose(); }; document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, [onClose]);
  return (<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
    <img src={src} alt={alt || ''} className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" />
  </div>);
}
