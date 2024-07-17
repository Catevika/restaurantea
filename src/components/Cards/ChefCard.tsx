import { cormorantInfant } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function ChefCard({ src, alt, width, height, fullname, title, slug }: { src: string, alt: string, width: number, height: number, fullname: string, title: string, slug: string; }) {

  return (
    <Link href={`/chefs/${slug}`}>
      <div className='container__card__chef'>
        <Image src={src} alt={alt} width={width} height={height} priority />
      </div>
      <h5 className={cormorantInfant.className}>{fullname}</h5>
      <p>{title}</p>
    </Link>
  );
}
