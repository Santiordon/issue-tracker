'use client'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

import { usePathname } from 'next/navigation'
import classnames from 'classnames'

import Link from 'next/link'

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: 'Dashboard', path: '/' },
    { label: 'Issues', path: '/issues' },
  ]
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/"><AiFillBug /></Link>
    <ul className="flex space-x-6">
      {
        links.map(link =>
          <Link 
            className={classnames({
              'text-zinc-800 transition-colors': currentPath === link.path,
              'text-zinc-500 transition-colors': currentPath !== link.path,
              'hover:text-zinc-800': currentPath !== link.path,
            })}
            key={link.path}
            href={link.path}
          >
          {link.label}</Link>
        )
      }
    </ul>
    </nav>
  )
}

export default NavBar