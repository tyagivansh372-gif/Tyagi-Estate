import { client, urlFor } from '@/lib/sanity';
import { MapPin, ShieldCheck, Milestone, Ruler, BedDouble, MessageCircle, ArrowLeft, Bath } from 'lucide-react';
import Link from 'next/link';

// Forces the page to check Sanity every time to avoid 404 caching
export const dynamic = 'force-dynamic';

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. AWAIT the params (Next.js 15 Requirement)
  const { slug } = await params;

  // 2. Automated Fetching based on the working Vision query
  const query = `*[_type == "property" && slug.current == $slug][0]{
    title,
    location,
    landmark,
    status,
    details,
    mainImage,
    gallery,
    "videoUrl": videoTour.asset->url
  }`;
  
  const property = await client.fetch(query, { slug });

  // 3. Fallback for new listings
  if (!property) return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-white font-serif text-3xl mb-4">Syncing with Sanity...</h1>
      <p className="text-slate-500 mb-8">The slug <span className="text-blue-500">"{slug}"</span> is published but not yet cached.</p>
      <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105">Back to Portfolio</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#020617] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/#listings" className="text-slate-500 hover:text-white flex items-center gap-2 mb-12 uppercase tracking-widest text-[10px] font-bold transition-colors">
          <ArrowLeft size={14} /> Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* MEDIA SECTION: Video or Main Image */}
          <div className="space-y-6">
            <div className="rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-square lg:aspect-video">
              {property.videoUrl ? (
                <video controls className="w-full h-full object-cover" src={property.videoUrl} />
              ) : (
                <img src={urlFor(property.mainImage).url()} className="w-full h-full object-cover" alt={property.title} />
              )}
            </div>
            
            {/* GALLERY LOOP: Automatically shows all photos */}
            {property.gallery && (
              <div className="grid grid-cols-4 gap-4">
                {property.gallery.map((img: any, i: number) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-slate-800 h-24">
                    <img src={urlFor(img).width(300).url()} className="w-full h-full object-cover" alt="Gallery" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-10">
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">{property.status}</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mt-4">{property.title}</h1>
              <p className="text-2xl text-slate-400 mt-4 flex items-center gap-3"><MapPin className="text-blue-500" /> {property.location}</p>
            </div>

            {/* DYNAMIC METRICS: Fetched from 'details' object */}
            <div className="grid grid-cols-3 gap-4 py-10 border-y border-slate-800/50 text-center">
              <div>
                <p className="text-white text-2xl font-serif font-bold flex items-center justify-center gap-2"><BedDouble size={18} className="text-blue-500" />{property.details?.bedrooms || 0}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Bedrooms</p>
              </div>
              <div className="border-x border-slate-800/50">
                <p className="text-white text-2xl font-serif font-bold flex items-center justify-center gap-2"><Bath size={18} className="text-blue-500" />{property.details?.bathrooms || 0}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Bathrooms</p>
              </div>
              <div>
                <p className="text-white text-2xl font-serif font-bold flex items-center justify-center gap-2"><Ruler size={18} className="text-blue-500" />{property.details?.area || 0}</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-bold">Sq. Ft</p>
              </div>
            </div>

            {/* INQUIRY CARD */}
            <div className="p-10 rounded-[3rem] bg-white text-slate-900 shadow-3xl">
              <p className="text-4xl font-serif font-bold mb-6">Price on Request</p>
              <a 
                href={`https://wa.me/919999999999?text=Interested in ${property.title}`}
                className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
              >
                <MessageCircle size={24} /> WhatsApp Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}