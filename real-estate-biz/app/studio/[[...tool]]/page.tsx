import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import { client, urlFor } from '@/lib/sanity';

// Define what the data looks like coming from Sanity
interface SanityProperty {
  title: string;
  location: string;
  price: string;
  status: string;
  details: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  mainImage: any;
}

// The Query: Ask Sanity for this specific data
const query = `*[_type == "property"]{
  title,
  location,
  price,
  status,
  details,
  mainImage
}`;

// Revalidate: 0 means "Fetch fresh data on every refresh" (Great for development)
export const revalidate = 0; 

export default async function Home() {
  const properties: SanityProperty[] = await client.fetch(query);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2">Featured Listings</h2>
        <p className="text-gray-600 mb-8">Handpicked properties and developments from our portfolio.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map((prop, index) => (
              <PropertyCard key={index} property={{
                title: prop.title,
                location: prop.location,
                price: prop.price,
                status: prop.status,
                // If details are missing, default to 0
                beds: prop.details?.bedrooms || 0,
                baths: prop.details?.bathrooms || 0,
                area: prop.details?.area || 0,
                // Convert the Sanity image to a real URL
                image: prop.mainImage 
                  ? urlFor(prop.mainImage).width(800).url() 
                  : 'https://via.placeholder.com/800x600',
              }} />
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500 text-lg">No properties found. Add one in the Dashboard!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}