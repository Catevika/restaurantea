import { dishesMenu } from '@/app/data';
import WhiteButton from '@/components/Buttons/WhiteButton';
import { josefinSans } from '@/fonts';

export default function MainCourseOrderCard() {
  return (
    <div className='column col__h__start' id='maincourse'>
      <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Dishes</h6>
      {dishesMenu?.map((dish) => (
        <div key={dish.id} className='container__card__order'>
          <input type='checkbox' id={dish.title} />
          <label htmlFor={dish.title}>{dish.title} - ${dish.price}</label>
        </div>
      ))}
      <div className='container col__h__start'>
        <WhiteButton link='/menu' text='Back to Menu' />
      </div>
    </div>
  );
}
