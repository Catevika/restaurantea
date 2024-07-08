import { dishesMenu } from '@/app/data';
import DishCard from '@/components/Cards/DishCard';
import Icon from '@/components/Icon/Icon';

export default function MainDishListMenu() {
  return (
    <div className='column col__h__start'>
      {dishesMenu ? dishesMenu.map((dish) => (
        <DishCard key={dish.id} icon={<Icon iconClass='icon__xl' src={dish.icon} alt={dish.alt} width={83} height={83} />} title={dish.title} paragraph={dish.paragraph} price={dish.price} />
      )) : null}
    </div>
  );
}
