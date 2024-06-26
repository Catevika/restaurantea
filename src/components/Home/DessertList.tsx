import { desserts } from '@/app/data';
import DishCard from '@/components/Cards/DishCard/DishCard';
import Icon from '@/components/Icon/Icon';

export default function DessertList() {
  return (
    <div className='column column__content__horizontal__start'>
      {desserts ? desserts.map((dessert) => (
        <DishCard key={dessert.id} icon={<Icon iconClass='icon__xl' src={dessert.icon} alt={dessert.alt} width={83} height={83} />} title={dessert.title} paragraph={dessert.paragraph} price={dessert.price} />
      )) : null}
    </div>
  );
}