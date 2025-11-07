"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-black text-white border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/5">
              {/* handshake SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="#0ea5a4" opacity="0.06" />
                <path d="M7.5 13.5l3-3 1.5 1.5-3 3-1.5-1.5z" fill="#fff" opacity="0.06" />
                <path d="M9.5 11.5c.28-.28.73-.28 1.01 0l3 3a.71.71 0 0 1 0 1.01l-1.5 1.5a.71.71 0 0 1-1.01 0l-3-3a.71.71 0 0 1 0-1.01L9.5 11.5z" fill="#06b6d4" />
                <path d="M8 12.5c0-.28.22-.5.5-.5h.5l1 1H9a.5.5 0 0 1-.5-.5z" fill="#fff" opacity="0.9" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-wide">SCC</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 ml-6">
            <Link href="/products" className="text-sm text-slate-300 hover:text-white">Products</Link>
            <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Dashboard</Link>
            <Link href="/about" className="text-sm text-slate-300 hover:text-white">About</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-2 rounded-md text-sm bg-slate-800 hover:bg-slate-700">Login</button>
          </div>

          <div className="flex items-center gap-3">
            <button aria-label="profile" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
              </svg>
            </button>

            <button className="md:hidden p-2 rounded-md bg-white/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                {open ? (
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-slate-800">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href="/products" className="text-sm text-slate-300 hover:text-white">Products</Link>
            <Link href="/dashboard" className="text-sm text-slate-300 hover:text-white">Dashboard</Link>
            <Link href="/about" className="text-sm text-slate-300 hover:text-white">About</Link>
            <button className="mt-2 px-3 py-2 rounded-md text-sm bg-slate-800 hover:bg-slate-700 text-left">Login</button>
          </div>
        </div>
      )}
    </header>
  )
}
