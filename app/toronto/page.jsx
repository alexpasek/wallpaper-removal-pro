import Link from "next/link";
import Gallery from "@/components/Gallery";

export const metadata = { title: "Toronto — Wallpaper Removal Pro" };

export default function CityPage(){
  const images = [1,2,3,4,5,6].map(i => `/cities/toronto/${i}.jpg`);
  return (
    <div className="container-x py-10">
      <nav className="text-sm text-gray-500 mb-6"><Link href="/">Home</Link> / Toronto</nav>
      <h1 className="text-3xl font-bold">Toronto — Wallpaper Removal & Painting</h1>
      <p className="mt-2 text-gray-700">Local photos, process, pricing guidance, and covered neighborhoods in Toronto.</p>

      <section className="mt-8">
        <Gallery images={images} />
      </section>

      <section className="prose-custom mt-10">
        <h2>Why homeowners in Toronto choose us</h2>
        <ul>
          <li>Full dust management with plastic, floor protection, and controlled scraping/steaming.</li>
          <li>Proper glue wash and repairs so the final paint lays down smooth and lasts.</li>
          <li>Clear communication, on-time arrival, tidy cleanup, and a 3‑year workmanship warranty.</li>
        </ul>

        <h2>What affects price</h2>
        <ul>
          <li>Square footage and number of rooms/ceilings.</li>
          <li>Condition of drywall/plaster and how many repair spots are needed.</li>
          <li>Access, ceiling height, and furniture protection requirements.</li>
        </ul>

        <p><a className="btn-cta" href="/quote/">Get a fast quote</a></p>
      </section>
    </div>
  );
}