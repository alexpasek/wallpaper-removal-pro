export const metadata = { title: "Interior Painting — Wallpaper Removal Pro" };
export default function Page(){
  return (
    <div className="container-x py-10">
      <header className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Interior Painting</h1>
          <p className="mt-3 text-gray-700">Crisp lines, durable coatings, and a tidy workspace. Proper prep and two coats where needed for a lasting finish.</p>
          <div className="mt-5 flex gap-3">
            <a className="btn-cta" href="/quote/">Get my quote</a>
            <a className="btn btn-primary" href="tel:+16479236784">Call +1 (647) 923-6784</a>
          </div>
        </div>
        <img src="/services/painting.jpg" alt="Interior Painting" className="rounded-2xl w-full h-64 md:h-72 object-cover shadow-card" />
      </header>

      <article className="prose-custom mt-10">
        <h2>Our process</h2>
        <ol>
          <li>Protect floors, trim, and openings. Set up dust control.</li>
          <li>Careful removal, adhesive wash, and surface inspection.</li>
          <li>Repairs and skim‑coating for a paint‑ready finish.</li>
          <li>Primer and final coats as specified.</li>
          <li>Cleanup and walkthrough.</li>
        </ol>

        <h2>Why it matters</h2>
        <p>Proper preparation is what makes paint look great and last. We focus on the hard parts—adhesive removal, repairs, and smoothing—so you don’t see seams, ridges, or flashing later.</p>

        <h2>What you get</h2>
        <ul>
          <li>Surface prep, caulking and spot repairs</li><li>Quality primers and finishes</li><li>Neat edges and proper protection</li><li>3‑year workmanship warranty</li>
        </ul>

        <h2>Areas served</h2>
        <p>Toronto, Mississauga, Oakville, Burlington, Hamilton and nearby neighborhoods.</p>

        <p><a className="btn-cta" href="/quote/">Get my quote</a></p>
      </article>
    </div>
  );
}