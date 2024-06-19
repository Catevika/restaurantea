import Button from '@/components/Buttons/Button';

export default function MailingList() {
  return (
    <div className='column content__horizontal__center'>
      <p className='uppercase border__tb__gold'>Mailing List</p>
      <p> Join our mailing list to get updates on events & exclusive offers.</p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder='Email' name='email' title='Email' autoComplete='email' />
        <Button text='Subscribe' />
      </form>
    </div>
  );
}
