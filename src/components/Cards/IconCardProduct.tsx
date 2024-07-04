import { cormorantInfant } from '@/fonts';

export default function IconCardProduct({ icon, title, paragraph }: { icon: JSX.Element, title: string, paragraph: string; }) {
  return (
    <div className='column container__card__product'>
      {icon}
      <h5 className={cormorantInfant.className}>{title}</h5>
      <p>{paragraph}</p>
    </div>
  );
}