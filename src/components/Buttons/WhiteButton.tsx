import { josefinSans } from '@/fonts';
import Link from 'next/link';

export default function WhiteButton({ link, text }: { link: string, text: string; }) {
  return (
    <Link className={`${josefinSans.className} whiteButton`} href={link} role='button'>{text}</Link>
  );
}