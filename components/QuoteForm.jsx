
'use client';
import { useState } from 'react';
export default function QuoteForm(){
  const [status, setStatus] = useState(null);
  async function onSubmit(e){ e.preventDefault(); const form = e.currentTarget; const data = Object.fromEntries(new FormData(form));
    setStatus("Sending...");
    try{
      const r = await fetch('/api/send-email', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
      if(r.ok){ setStatus("Thanks! We received your request."); form.reset(); } else { setStatus("Error: " + await r.text()); }
    }catch{ setStatus("Network error."); }
  }
  return (
    <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 card p-6">
      <input className="border rounded-2xl p-3" name="name" placeholder="Name" required />
      <input className="border rounded-2xl p-3" name="phone" placeholder="Phone" required />
      <input className="border rounded-2xl p-3 md:col-span-2" name="email" type="email" placeholder="Email" />
      <textarea className="border rounded-2xl p-3 md:col-span-2" name="details" rows="5" placeholder="Project details"></textarea>
      <button className="btn-cta md:col-span-2" type="submit">Send</button>
      {status && <p className="mt-3 text-sm md:col-span-2">{status}</p>}
    </form>
  );
}
