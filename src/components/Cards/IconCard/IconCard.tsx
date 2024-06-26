import { cormorantInfant } from '@/fonts';

export default function IconCard({ icon, title, paragraph }: { icon: JSX.Element, title: string, paragraph: string; }) {
  return (
    <div className='container__card__details'>
      {icon}
      <div className='column column__content__horizontal__start'>
        <h5 className={cormorantInfant.className}>{title}</h5>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
