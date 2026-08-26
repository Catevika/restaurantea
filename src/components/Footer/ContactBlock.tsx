import { cormorantInfant } from '@/fonts';

export default function ContactBlock() {
  return (
    <div className='column content__contact col__h__start'>
      <h6 className='text__uppercase border__tb__gold' > Contact</h6>
      <h4 className={cormorantInfant.className}>Business Email</h4>
      <p>Catevika Web Dev</p>
      <p><span className='active'>catevikawebdev.com</span></p>
    </div >
  );
}
