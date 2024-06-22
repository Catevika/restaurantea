import styles from '@/components/Cards/PopularCard/PopularCard.module.css';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function PopularCard({ src, width, height, title, price, paragraph }: { src: string, width: number, height: number, title: string, price: number, paragraph: string; }) {
  return (
    <div className='container__card__popular'>
      <div className={styles.popularCardImg}>
        <Image src={src} alt='' width={width} height={height} priority />
      </div>
      <div className='container'>
        <h6 className={cormorantInfant.className}>{title}</h6>
        <p><span>${`${price}`}</span></p>
      </div>
      <p className={`${josefinSans.className} border__top__gray`}>{paragraph}</p>
    </div>
  );
}
