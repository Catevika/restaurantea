import { cormorantInfant } from '@/fonts';
import type { ReactNode } from 'react';

export default function IconCardDetails({ icon, title, paragraph }: { icon: ReactNode, title: string, paragraph: string; }) {
  return (
    <div className='container__card__details'>
      {icon}
      <div className='column col__h__start'>
        <h5 className={cormorantInfant.className}>{title}</h5>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
