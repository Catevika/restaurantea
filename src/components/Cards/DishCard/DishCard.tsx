import styles from '@/components/Cards/DishCard/DishCard.module.css';
import { cormorantInfant } from '@/fonts';
import Image from 'next/image';

export default function DishCard({ icon, title, paragraph, price }: { icon: JSX.Element, title: string, paragraph: string; price: number; }) {
  return (
    <div className='container__cards'>
      {icon}
      <div className='column column__content__horizontal__start'>
        <h5 className={cormorantInfant.className}>{title}</h5>
        <p className='container__cards'>
          {paragraph}
          <span><Image className={styles.dishCardImg} src='/icons/dotted-line.svg' alt='' width={332} height={8} priority /></span>
          <span>${`${price}`}</span>
        </p>
      </div>
    </div>
  );
}
