import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle'
import MobileNavDropdown from './MobileNavDropdown'
import { pages } from '@/lib/constants'

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg className='w-20 h-20'>
        <circle r={30} fill='#7730B0' cx={50+'%'} cy={50+'%'}/>
      <text 
        fill={'#ffffff'}
        fontFamily={"Noto Serif CJK SC"} 
        fontSize={30} 
        fontStyle={"italic"} 
        strokeWidth={0} 
        textAnchor={'middle'}
        dominantBaseline={'middle'}
        x={46+'%'}
        y={50+'%'}
        >
          蕙
        </text>
    </svg>
  )
}

export const navLinks = [
  {
    label: 'about',
    href: "/"+pages.about,
    mobile: true
  },
  {
    label: 'projects',
    href: '/'+pages.projects,
    mobile: true
  },
  {
    label: <Logo />,
    href: '/',
    mobile: false
  },
  {
    label: 'latest research',
    href: '/'+pages.projects+"#",
    mobile: true
  }
]

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}><Link href={link.href}>{link.label}</Link></li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar