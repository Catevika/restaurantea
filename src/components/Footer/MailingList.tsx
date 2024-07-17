import ReverseButton from '@/components/Buttons/ReverseButton';
import { cormorantInfant } from '@/fonts';

export default function MailingList() {
  return (
    <div className='column content__mailing content__horizontal__center'>
      <h6 className='text__uppercase border__tb__gold'>Mailing List</h6>
      <h4 className={cormorantInfant.className}>Join our mailing list</h4>
      <p>Get updates on events & exclusive offers.</p>
      <form className='column form__content__mailing row__h__start'>
        <label htmlFor='email-mailing'>Email</label>
        <input type='email' id='email-mailing' placeholder='Email' name='email' title='Email' autoComplete='email' />
        <ReverseButton type='submit' text='Subscribe' />
      </form>
    </div>
  );
}
