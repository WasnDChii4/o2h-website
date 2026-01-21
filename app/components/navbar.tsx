'use client'

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>  
      <div className="navbar bg-base-100 shadow-sm fixed top-0 z-30">
        <div className="navbar-start">
          <button onClick={() => setOpen(true)} className="btn btn-ghost" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-center" />
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 h-full w-64 bg-base-100 z-50 transform transition-transform duration-300 ease-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={() => setOpen(false)} className="btn btn-ghost btn-sm">
            ✕
          </button>
          <span className="font-bold text-lg">Menu</span>
        </div>

        <ul className="menu p-4 space-y-1 w-full">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/stores" onClick={() => setOpen(false)}>
              Store
            </Link>
          </li>
          <li>
            <Link href="/albums" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Navbar
