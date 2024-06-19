import { josefinSans } from '@/fonts';

export default function Button({ text }: { text: string; }) {
  return (
    <button className={josefinSans.className}>{text}</button>
  );
}
