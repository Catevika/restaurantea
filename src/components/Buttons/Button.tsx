import { josefinSans } from '@/fonts';
import Link from 'next/link';

export default function Button({ link, text }: { text: string, link: string; }) {
  return (
    <Link className={`${josefinSans.className} button`} href={link} role='button'>{text}</Link>
  );
}
