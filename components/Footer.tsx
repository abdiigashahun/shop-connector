"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate with API
    if (!email) return;
    alert(`Subscribed ${email} (placeholder)`);
    setEmail("");
  };

  return (
    <footer className="bg-black text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="text-accent"
                  fill="none"
                >
                  <path
                    d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"
                    fill="#06b6d4"
                    opacity="0.06"
                  />
                  <path
                    d="M9.5 11.5c.28-.28.73-.28 1.01 0l3 3a.71.71 0 0 1 0 1.01l-1.5 1.5a.71.71 0 0 1-1.01 0l-3-3a.71.71 0 0 1 0-1.01L9.5 11.5z"
                    fill="#06b6d4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold">SCC</div>
                <div className="text-sm text-slate-400">
                  ShopConnector — local products & maps
                </div>
              </div>
            </Link>
          </div>

          <div>
            <h4 className="text-sm text-white font-medium mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-white font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-white font-medium mb-3">Get updates</h4>
            <p className="text-sm text-slate-400 mb-3">
              Subscribe to our newsletter for new products and local shop
              highlights.
            </p>
            <form onSubmit={subscribe} className="flex items-center gap-2">
              <input
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-slate-900 text-white placeholder-slate-500 px-3 py-2 rounded-md border border-slate-800"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-accent text-black rounded-md text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-300"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.88v-6.99H8.898v-2.89h1.54V9.797c0-1.52.9-2.36 2.28-2.36.66 0 1.35.12 1.35.12v1.49h-.77c-.76 0-.99.47-.99.95v1.15h1.68l-.27 2.89h-1.41v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-300"
                >
                  <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zm4.875 8.625c.006.138.01.276.01.415 0 4.237-3.225 9.129-9.129 9.129-1.815 0-3.504-.532-4.922-1.447.252.03.51.046.773.046 1.504 0 2.888-.51 3.987-1.37-1.406-.026-2.592-.958-2.999-2.24.197.038.4.06.61.06.297 0 .585-.04.859-.118-1.468-.296-2.573-1.586-2.573-3.141v-.04c.433.24.93.385 1.46.403-1.16-.776-1.924-2.093-1.924-3.585 0-.787.213-1.523.585-2.157 2.073 2.541 5.175 4.213 8.665 4.389-.07-.29-.104-.596-.104-.91 0-2.207 1.79-3.996 3.996-3.996 1.15 0 2.19.484 2.922 1.259.91-.178 1.766-.51 2.537-.969-.297.918-.93 1.686-1.758 2.173.81-.096 1.586-.313 2.307-.632-.537.803-1.22 1.506-2.005 2.068z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {year} SCC — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
