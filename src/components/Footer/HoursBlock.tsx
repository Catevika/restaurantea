import { cormorantInfant } from '@/fonts';

export default function HoursBlock() {
  return (
    <div className='column content__hours column__row-h-end'>
      <h6 className='text__uppercase border__tb__gold'>Working Hours</h6>
      <h4 className={cormorantInfant.className}>Catevika Web Dev</h4>
      <p>From<span className='active'> Monday</span> to <span className='active'>Friday</span></p>
      <p><span className='active'>9:00AM</span> to <span className='active'>6:00PM</span></p>
      <p>CET <span className='active'>(Nov. - March: UTC + 1)</span> or</p>
      <p>CEST <span className='active'>(April - Oct.: UTC + 2)</span></p>
    </div>
  );
}
