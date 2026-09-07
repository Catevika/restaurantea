import { cormorantInfant } from '@/fonts';
import type { ReactNode } from 'react';

export default function IconCardProduct({ icon, title, paragraph }: { icon: ReactNode, title: string, paragraph: string; }) {
  return (
    <div className='column container__card__product'>
      {icon}
      <h5 className={cormorantInfant.className}>{title}</h5>
      <p className='container__card__product__text'>{paragraph}</p>
    </div>
  );
}