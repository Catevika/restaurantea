import { beverages } from '@/app/data';
import WhiteButton from '@/components/Buttons/WhiteButton';
import { josefinSans } from '@/fonts';

export default function BeverageOrderCard() {
  return (
    <div className='column col__h__start' id='beverage'>
      <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Beverages</h6>
      {beverages?.map((beverage) => (
        <div key={beverage.id} className='container__card__order'>
          <input type='checkbox' id={beverage.title} />
          <label htmlFor={beverage.title}>{beverage.title} - ${beverage.price}</label>
        </div>
      ))}
      <div className='container col__h__start'>
        <WhiteButton link='/menu' text='Back to Menu' />
      </div>
    </div>
  );
}
