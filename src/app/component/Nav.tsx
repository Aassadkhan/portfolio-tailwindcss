'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">My Portfolio</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className={pathname === '/' ? 'text-blue-400' : 'hover:text-blue-400'}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/project" className={pathname === '/projects' ? 'text-blue-400' : 'hover:text-blue-400'}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'text-blue-400' : 'hover:text-blue-400'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation