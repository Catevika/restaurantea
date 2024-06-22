import { josefinSans } from '@/fonts';
import Link from 'next/link';

export default function Button({ type, link, text }: { type: 'button' | 'reset' | 'submit' | undefined, text: string, link: string; }) {
  return (
    <button type={type} className={josefinSans.className} title={text}><Link href={link}>{text}</Link></button>
  );
}
