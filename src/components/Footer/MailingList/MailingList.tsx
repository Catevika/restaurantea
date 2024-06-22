import Button from '@/components/Buttons/Button';
import Link from 'next/link';

export default function MailingList() {
  return (
    <div className='column content__horizontal__center'>
      <p className='text__uppercase border__tb__gold'>Mailing List</p>
      <p> Join our mailing list to get updates on events & exclusive offers.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='Email' name='email' title='Email' autoComplete='email' />
        <Button type='submit' link='#!' text='Subscribe' />
      </form>
      <div className='column content__horizontal__center'>
        <p>This website is a customized version of:</p>
        <p>© Copyright - Restaurantate | Designed by <Link href='https://www.victorflow.com/' ><span className='active'>VictorFlow</span></Link> Templates - Powered by <span className='active'>Webflow</span></p>
      </div>
    </div>
  );
}
