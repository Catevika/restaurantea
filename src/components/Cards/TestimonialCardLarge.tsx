import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function TestimonialCardLarge({ src, alt, fullname, city, text }: { src: string, alt: string, fullname: string, city: string, text: string; }) {
  return (
    <div className='container bg__dark'>
      <div className='container__card__testimonial__large'>
        <div className='column'>
          <q className={`{cormorantInfant.className}`}><em>{text}</em></q>
          <div>
            <div className='column'>
              <p className='container__quote__images'>
                <Image className='icon__large__round' src={src} alt={alt} width={113} height={113} priority />
                <Image className='icon__quote' src='/icons/quote.svg' alt='' width={34} height={35} priority />
              </p>
              <div className='column'>
                <h6 className={cormorantInfant.className}>{fullname}</h6>
                <p className={`${josefinSans.className} active`}>{city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
