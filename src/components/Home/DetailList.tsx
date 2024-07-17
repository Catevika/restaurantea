import { details } from '@/app/data';
import IconCardDetails from '@/components/Cards/IconCardDetails';
import Icon from '@/components/Icon/Icon';

export default function DetailList() {
  return (
    <div className='container__cards container__details'>
      {details ? details.map((detail) => (
        <IconCardDetails key={detail.id} icon={<Icon iconClass='dotted__line icon__large' src={detail.icon} alt={detail.alt} width={83} height={83} />} title={detail.title} paragraph={detail.paragraph} />
      )) : null}
    </div>
  );
}
