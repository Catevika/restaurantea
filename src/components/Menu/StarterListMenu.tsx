import { startersMenu } from '@/app/data';
import DishCard from '@/components/Cards/DishCard';
import Icon from '@/components/Icon/Icon';

export default function StarterListMenu() {
  return (
    <div className='column col__h__start'>
      {startersMenu ? startersMenu.map((starter) => (
        <DishCard key={starter.id} icon={<Icon iconClass='icon__xl' src={starter.icon} alt={starter.alt} width={83} height={83} />} title={starter.title} paragraph={starter.paragraph} price={starter.price} />
      )) : null}
    </div>
  );
}
