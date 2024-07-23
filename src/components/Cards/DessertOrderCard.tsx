import { dessertsMenu } from '@/app/data';
import WhiteButton from '@/components/Buttons/WhiteButton';
import { josefinSans } from '@/fonts';


export default function DessertOrderCard() {
  return (
    <div className='column col__h__start' id='dessert'>
      <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Desserts</h6>
      {dessertsMenu?.map((dessert) => (
        <div key={dessert.id} className='container__card__order'>
          <input type='checkbox' id={dessert.title} />
          <label htmlFor={dessert.title}>{dessert.title} - ${dessert.price}</label>
        </div>
      ))}
      <div className='container col__h__start'>
        <WhiteButton link='/menu' text='Back to Menu' />
      </div>
    </div>
  );
}
