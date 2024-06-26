import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function OfferCard({ bckg, textColor, iconXl, textClass, price, percent, product, paragraph, imgSrc, imgWidth, imgHeight }: { bckg: string, textColor: string, iconXl: JSX.Element, textClass: string, price: number, percent: number, product: string, paragraph: string, imgSrc: string, imgWidth: number, imgHeight: number; }) {
  return (
    <div className={`container__card__offer ${bckg}`}>
      <div className='content__badge__offer'>
        <div className='content__badge__offer__images'>
          {iconXl}
          <div className={`content__45deg__offer ${textColor}`}>
            <p className={`${josefinSans.className} text__uppercase`}>Only</p>
            <p className={`${cormorantInfant.className} text__offer`}>$<span className={textClass}>{price}</span></p>
          </div>
        </div>
        <div className='text__extended text__uppercase border__tb__black'>{percent}% Off Now</div>
        <h4 className={cormorantInfant.className}>{product}</h4>
        <p>{paragraph}</p>
      </div>
      <Image className='small' src={imgSrc} alt='' width={imgWidth} height={imgHeight} priority />
    </div>
  );
}
