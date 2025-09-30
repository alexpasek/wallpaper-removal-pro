
export const metadata = { title: "Get a Quote — Wallpaper Removal Pro" };
import QuoteForm from "@/components/QuoteForm";
export default function Page(){
  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold">Get a Quote</h1>
      <QuoteForm />
      <p className="text-sm text-gray-500 mt-3">Posts to Cloudflare Pages Function at <code>/api/send-email</code>.</p>
    </div>
  );
}
