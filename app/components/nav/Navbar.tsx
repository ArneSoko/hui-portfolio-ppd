import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle';
import MobileNavDropdown from './MobileNavDropdown';
import { pages } from '@/lib/constants';
import Logo from './Logo';

// Navigation Links
export const navLinks = [
  {
    label: 'About',
    href: '/' + pages.about,
    mobile: true,
  },
  {
    label: 'Projects ',
    href: '/' + pages.projects,
    mobile: true,
  },
  {
    label: <Logo />,
    href: '/',
    mobile: false,
  },
  {
    label: 'Cat pictures 🐾',
    href: `/` + pages.cats,
    mobile: true,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-200 dark:bg-base-900 md:bg-base-100">
  <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
    {/* Desktop */}
    <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className="bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text font-extrabold tracking-wide uppercase text-lg hover:opacity-80 focus:text-transparent focus:bg-clip-text focus:outline-none active:text-transparent active:bg-clip-text"
        >
          <Link href={link.href} title={typeof link.label === 'string' ? link.label : undefined}>
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <DarkModeToggle />
      </li>
    </ul>
    {/* Mobile */}
    <MobileNavDropdown />
    <div className="md:hidden">
      <DarkModeToggle />
    </div>
  </div>
</nav>
  );
};

export default Navbar;