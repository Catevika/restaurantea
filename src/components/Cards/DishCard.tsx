import { cormorantInfant } from '@/fonts';
import Image from 'next/image';

export default function DishCard({ icon, title, paragraph, price }: { icon: JSX.Element, title: string, paragraph: string; price: number; }) {
  return (
    <div className='container__cards'>
      {icon}
      <div className='column col__h__start'>
        <div className='container container__card__dishes'>
          <h5 className={cormorantInfant.className}>{title}</h5>
          <p className='container row-h-end'>
            <Image className='img__dishcard' src='/icons/dotted-line.svg' alt='' width={332} height={8} priority />
          </p>
          <h6 className={cormorantInfant.className}>${`${price}`}</h6>
        </div>
        <div className='container__cards'>
          {paragraph}
        </div>
      </div>
    </div >
  );
}
