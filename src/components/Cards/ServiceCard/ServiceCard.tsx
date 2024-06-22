import { josefinSans } from '@/fonts';

export default function ServiceCard({ icon, text }: { icon: JSX.Element, text: string; }) {
  return (
    <div className='column content__service'>
      {icon}
      <p className={josefinSans.className}>{text}</p>
    </div>
  );
}
