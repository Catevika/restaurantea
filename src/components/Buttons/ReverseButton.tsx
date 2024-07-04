import { josefinSans } from '@/fonts';

export default function Button({ type, text }: { type: 'button' | 'reset' | 'submit' | undefined, text: string; }) {
  return (
    <button type={type} className={`${josefinSans.className} reverseButton`} title={text}>{text}</button>
  );
}