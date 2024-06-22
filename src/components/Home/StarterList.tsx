import { starters } from '@/app/data';
import DishCard from '@/components/Cards/DishCard/DishCard';
import Icon from '@/components/Icon/Icon';

export default function StarterList() {
  return (
    <div className='column'>
      {starters ? starters.map((starter) => (
        <DishCard key={starter.id} icon={<Icon iconClass='icon__xl' src={starter.icon} alt={starter.alt} width={83} height={83} />} title={starter.title} paragraph={starter.paragraph} price={starter.price} />
      )) : null}
    </div>
  );
}
