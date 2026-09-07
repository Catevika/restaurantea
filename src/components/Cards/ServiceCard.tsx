import { josefinSans } from '@/fonts';
import type { ReactNode } from "react";

export default function ServiceCard({ icon, text }: { icon: ReactNode, text: string; }) {
  return (
    <div className='column content__service'>
      {icon}
      <p className={josefinSans.className}>{text}</p>
    </div>
  );
}