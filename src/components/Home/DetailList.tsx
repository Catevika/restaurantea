import { details } from '@/app/data';
import Icon from '../Icon/Icon';
import IconCard from '../IconCard/IconCard';

export default function DetailList() {
  return (
    <div className='container__cards'>
      {details ? details.map((detail) => (
        <IconCard key={detail.id} icon={<Icon src={detail.icon} alt={detail.alt} width={83} height={83} />} title={detail.title} paragraph={detail.paragraph} />
      )) : null}
    </div>
  );
}
