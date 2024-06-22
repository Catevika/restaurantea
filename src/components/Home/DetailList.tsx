import { details } from '@/app/data';
import IconCard from '@/components/Cards/IconCard/IconCard';
import Icon from '@/components/Icon/Icon';

export default function DetailList() {
  return (
    <div className='container__cards'>
      {details ? details.map((detail) => (
        <IconCard key={detail.id} icon={<Icon iconClass='icon__large' src={detail.icon} alt={detail.alt} width={83} height={83} />} title={detail.title} paragraph={detail.paragraph} />
      )) : null}
    </div>
  );
}
