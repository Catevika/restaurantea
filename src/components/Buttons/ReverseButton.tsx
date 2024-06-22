import { josefinSans } from '@/fonts';
import Link from 'next/link';

export default function Button({ type, link, text }: { type: 'button' | 'reset' | 'submit' | undefined, link: string, text: string; }) {
  return (
    <button type={type} className={`${josefinSans.className} reverseButton`} title={text}><Link href={link}>{text}</Link></button>
  );
}