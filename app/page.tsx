import React from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  image?: string;
  lat?: number;
  lng?: number;
};

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Best Sneaker Shoes",
    price: 499.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop",
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    id: "2",
    title: "Artisan Coffee Beans",
    price: 18.0,
    category: "Groceries",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80&auto=format&fit=crop",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "3",
    title: "Ceramic Planter",
    price: 29.5,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80&auto=format&fit=crop",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: "4",
    title: "Minimalist Lamp",
    price: 89.0,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&q=80&auto=format&fit=crop",
    lat: 51.5074,
    lng: -0.1278,
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded-full">
      {children}
    </span>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="bg-gray-900 rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="w-full h-48 bg-slate-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">{p.title}</h3>
            <div className="mt-2">
              <Badge>{p.category}</Badge>
            </div>
          </div>
          <div className="text-sm font-semibold text-white">
            {p.price.toFixed(2)} birr
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={`/products/${p.id}`}
            className="text-sm text-slate-300 hover:underline"
          >
            View
          </a>
          {p.lat && p.lng ? (
            <a
              className="text-sm text-accent"
              href={`https://www.google.com/maps?q=${p.lat},${p.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              Map
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              ShopConnector — Discover local shops & unique products
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Browse curated items from nearby shop owners. See where a shop is
              located and support local businesses — fast, simple, and
              beautiful.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/products" className="inline-block btn-primary">
                Browse products
              </a>
              <a
                href="/dashboard"
                className="inline-block text-sm text-slate-300 hover:text-white"
              >
                Sell on ShopConnector
              </a>
            </div>
          </div>
          {/* Stylish product spotlight */}
          <div className="rounded-xl overflow-hidden shadow-card border border-slate-800">
            <div className="relative w-full h-64 md:h-72 bg-slate-800">
              {/* showcase first sample product */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SAMPLE_PRODUCTS[0].image}
                alt={SAMPLE_PRODUCTS[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {SAMPLE_PRODUCTS[0].title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {SAMPLE_PRODUCTS[0].category} •{" "}
                    <span className="font-semibold">
                      {SAMPLE_PRODUCTS[0].price.toFixed(2)} birr

                    </span>
                  </p>
                </div>
                <a
                  href={`/products/${SAMPLE_PRODUCTS[0].id}`}
                  className="ml-4 inline-flex items-center gap-2 bg-accent text-black px-3 py-2 rounded-md text-sm font-semibold"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured products</h2>
            <a
              href="/products"
              className="text-sm text-slate-300 hover:text-white"
            >
              See all
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SAMPLE_PRODUCTS.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 shadow-card border border-slate-800">
            <h3 className="font-semibold text-white">Safe & Local</h3>
            <p className="mt-2 text-sm text-slate-300">
              Find trusted shop owners near you and view their shop location
              before you visit.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-card border border-slate-800">
            <h3 className="font-semibold text-white">Easy setup</h3>
            <p className="mt-2 text-sm text-slate-300">
              Open a dashboard, add products with a location, and reach
              customers in your area.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-card border border-slate-800">
            <h3 className="font-semibold text-white">Responsive design</h3>
            <p className="mt-2 text-sm text-slate-300">
              Beautiful layout on mobile and desktop. Built with Next.js &
              Tailwind CSS.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
