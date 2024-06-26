import ReverseButton from '@/components/Buttons/ReverseButton';
import { cormorantInfant, josefinSans } from '@/fonts';

export default function ReservationForm() {
  return (
    <form className='column form'>
      <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Reservation</h6>
      <h4 className={cormorantInfant.className}>Book your table now</h4>
      <div className='container content__form'>
        <p className='column column__content__horizontal__start'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' title='name' placeholder='Name' autoComplete='name' />
        </p>

        <p className='column column__content__horizontal__start'>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' title='email' placeholder='Email' autoComplete='email' />
        </p>
      </div>

      <div className='container content__form'>
        <p className='column column__content__horizontal__start'>
          <label htmlFor="date">Date</label>
          <input type="date" id='date' name='date' title='date' placeholder='Date' />
        </p>

        <p className='column column__content__horizontal__start'>
          <label htmlFor="number">Guests</label>
          <input type="number" id='number' name='number' title='number' placeholder='1' />
        </p>

        <p className='column column__content__horizontal__start'>
          <label htmlFor="hour">Time</label>
          <input type="text" id='hour' name='hour' title='hour' placeholder='Arrival time' />
        </p>
      </div>

      <ReverseButton type='submit' link='/reservation' text='Book a table' />
    </form>
  );
}
