
'use client';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import TrustBar from '@/components/TrustBar';

const cities=[{name:'Toronto',slug:'toronto'},{name:'Mississauga',slug:'mississauga'},{name:'Oakville',slug:'oakville'},{name:'Burlington',slug:'burlington'},{name:'Hamilton',slug:'hamilton'}];
const cityStyles={Toronto:'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',Mississauga:'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100',Oakville:'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',Burlington:'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100',Hamilton:'bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100'};

const homeImages = [1,2,3,4,5,6].map(i => `/home/${i}.jpg`);

export default function Page(){
  return (
    <div className="container-x py-10">
      <section className="py-6">
        <h1 className="text-4xl font-bold tracking-tight">Wallpaper & Popcorn Ceiling Removal — Done Right</h1>
        <p className="mt-3 text-lg text-gray-700">Clean, dust‑controlled removal, proper repairs and skim, and a smooth paint‑ready finish backed by a 3‑year workmanship warranty.</p>
        <TrustBar />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cities.map(c => (
            <Link key={c.slug} href={`/${c.slug}/`} className={`pill ${cityStyles[c.name] || 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}`}>
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <Gallery images={homeImages} itemClass="h-64" />
      </section>

      <section className="py-12">
        <div className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready for a guaranteed, dust‑controlled removal?</h3>
            <p className="text-gray-600">Get a fast quote with clear scope, schedule, and warranty.</p>
          </div>
          <a href="/quote/" className="btn-cta">Get My Quote</a>
        </div>
      </section>
    </div>
  );
}
