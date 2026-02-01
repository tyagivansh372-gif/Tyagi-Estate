import { client } from '@/lib/sanity';
import PropertyDetailClient from '@/components/PropertyDetailClient';

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  // 1. AWAIT the params for Next.js 15+
  const { slug } = await params;

  const query = `*[_type == "property" && slug.current == $slug][0]{
    title, location, landmark, status, details, mainImage, gallery,
    "videoUrl": videoTour.asset->url
  }`;

  // 2. Fetch data on the Server (No CORS/Browser block)
  const property = await client.fetch(query, { slug });

  if (!property) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-serif mb-4 italic">Property Not Found</h1>
        <Link href="/#listings" className="text-blue-500 underline uppercase tracking-widest text-xs">Back to Portfolio</Link>
      </div>
    );
  }

  // 3. Pass data to the Client component for animations
  return <PropertyDetailClient property={property} />;
}