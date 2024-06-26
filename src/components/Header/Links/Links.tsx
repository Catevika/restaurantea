"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();

  return (
    <p className='container__links'>
      <Link className={pathname === '/' ? 'link active' : 'link'} href='/'>
        Home
      </Link>
      <Link className={pathname === '/about' ? 'link active' : 'link'} href='/about'>
        About
      </Link>
      <Link className={pathname === '/menu' ? 'link active' : 'link'} href='/menu'>
        Menu
      </Link>
      <Link className={pathname === '/reservation' ? 'link active' : 'link'} href='/reservation'>
        Reservation
      </Link>
      <Link className={pathname === '/gallery' ? 'link active' : 'link'} href='/gallery'>
        Gallery
      </Link>
      <Link className={pathname === '/blog' ? 'link active' : 'link'} href='/blog'>
        Blog
      </Link>
      <Link className={pathname === '/contact' ? 'link active' : 'link'} href='/contact'>
        Contact
      </Link>
    </p>
  );
}
