'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import AvatarSementara from "../../public/img/backgrounds/O2H_ImagesHero_2.jpg";

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
            <p className="text-yellow-400">O2H</p> ✕ <p className="text-purple-500">ANTINRML</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex w-130 lg:w-160 xl:w-180">
            <input
              type="text"
              placeholder="Telusuri"
              className="input input-bordered w-full rounded-l-full"
            />
            <button className="btn rounded-r-full">
              <FaSearch size={20} />
            </button>
          </div>
        </div>

        <div className="navbar-end gap-5">
          <button className="btn btn-ghost btn-circle">
            <FaShoppingCart size={20} />
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full">
                <Image alt="" src={AvatarSementara} />
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 mt-3">
              <li><Link href="#">Profile</Link></li>
              <li><Link href="#">Settings</Link></li>
              <li><Link href="#">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 z-50 transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={() => setOpen(false)} className="btn btn-ghost btn-sm">
            ✕
          </button>
          <span className="font-bold text-lg">Menu</span>
        </div>

        <div className="p-4 md:hidden">
          <div className="flex">
            <input type="text" placeholder="Telusuri" className="input input-bordered w-full rounded-l-full" />
            <button className="btn rounded-r-full">
              <FaSearch size={18} />
            </button>
          </div>
        </div>

        <ul className="menu p-4 space-y-1 w-full">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/stores" onClick={() => setOpen(false)}>Store</Link>
          </li>
          <li>
            <Link href="/albums" onClick={() => setOpen(false)}>Album</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Navbar
