import { startersMenu } from '@/app/data';
import WhiteButton from '@/components/Buttons/WhiteButton';
import { josefinSans } from '@/fonts';

export default function StarterOrderCard() {
  return (
    <div className='column col__h__start' id='starter'>
      <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Starters</h6>
      {startersMenu?.map((starter) => (
        <div key={starter.id} className='container__card__order'>
          <input type='checkbox' id={starter.title} />
          <label htmlFor={starter.title}>{starter.title} - ${starter.price}</label>
        </div>
      ))}
      <div className='container col__h__start'>
        <WhiteButton link='/menu' text='Back to Menu' />
      </div>

    </div>
  );
}
