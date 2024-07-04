import { services } from '@/app/data';
import ServiceCard from '@/components/Cards/ServiceCard';
import Icon from '@/components/Icon/Icon';

export default function ServiceList() {
  return (
    <div className='container content__services'>
      {services ? services.map((service) => (
        <ServiceCard key={service.id} icon={<Icon iconClass='icon__service' src={service.src} alt='' width={55} height={54} />} text={service.text} />
      )) : null}
    </div>
  );
}
