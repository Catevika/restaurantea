import { dishes } from '@/app/data';
import DishCard from '@/components/Cards/DishCard/DishCard';
import Icon from '@/components/Icon/Icon';

export default function MainDishList() {
  return (
    <div className='column'>
      {dishes ? dishes.map((dish) => (
        <DishCard key={dish.id} icon={<Icon iconClass='icon__xl' src={dish.icon} alt={dish.alt} width={83} height={83} />} title={dish.title} paragraph={dish.paragraph} price={dish.price} />
      )) : null}
    </div>
  );
}
