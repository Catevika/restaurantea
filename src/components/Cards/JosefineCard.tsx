import Stars from '@/components/Stars/Stars';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function JosefineCard({ src, alt, fullname, occupation, text }: { src: string, alt: string, fullname: string, occupation: string, text: string; }) {
  return (
    <div className='column col__h__start bg__white'>
      <div className='container__cards'>
        <Image className='icon__small__round' src={src} alt={alt} width={72} height={71} priority />
        <div className='column col__h__start content__josefine'>
          <h5 className={cormorantInfant.className}>{fullname}</h5>
          <p className={josefinSans.className}>{occupation}</p>
        </div>
      </div>
      <p className={josefinSans.className}>{text}</p>
      <Stars />
    </div>
  );
}
