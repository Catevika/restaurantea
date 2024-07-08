import { beverages } from '@/app/data';
import DishCard from '@/components/Cards/DishCard';
import Icon from '@/components/Icon/Icon';

export default function BeverageList() {
  return (
    <div className='column col__h__start'>
      {beverages ? beverages.map((beverage) => (
        <DishCard key={beverage.id} icon={<Icon iconClass='icon__xl' src={beverage.src} alt='' width={83} height={83} />} title={beverage.title} price={beverage.price} paragraph={beverage.paragraph} />
      )) : null}
    </div>
  );
}