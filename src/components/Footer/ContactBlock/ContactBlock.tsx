import { cormorantInfant } from '@/fonts';

export default function ContactBlock() {
  return (
    <div className='column content__contact column__content__horizontal__start'>
      <h6 className='text__uppercase border__tb__gold' > Contact</h6>
      <h4 className={cormorantInfant.className}>Business Address</h4>
      <p>Catevika Web Dev</p>
      <p>128 rue de la Boétie</p>
      <p>75008 PARIS</p>
      <p><span className='active'>catevikawebdev.com</span></p>
    </div >
  );
}
