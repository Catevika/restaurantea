import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function PopularCard({ src, width, height, title, price, paragraph }: { src: string, width: number, height: number, title: string, price: number, paragraph: string; }) {
  return (
    <div className='container__card__popular'>
      <div className='img__popularcard'>
        <Image src={src} alt='' width={width} height={height} priority />
      </div>
      <div className='container__cards'>
        <h6 className={cormorantInfant.className}>{title}</h6>
        <h6 className={cormorantInfant.className}><span>${`${price}`}</span></h6>
      </div>
      <p className={`${josefinSans.className} text__popular border__top__gray`}>{paragraph}</p>
    </div>
  );
}
