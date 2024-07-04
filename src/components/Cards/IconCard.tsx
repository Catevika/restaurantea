import { cormorantInfant } from '@/fonts';

export default function IconCard({ icon, title, paragraph }: { icon: JSX.Element, title: string, paragraph: string; }) {
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
