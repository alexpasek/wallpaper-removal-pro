
'use client';
export default function StickyCTA(){
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <a href="/quote/" className="btn-cta w-full text-center">Get My Quote</a>
    </div>
  );
}
