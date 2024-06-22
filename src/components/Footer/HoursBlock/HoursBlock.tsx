
export default function HoursBlock() {
  return (
    <div className='column column__content__horizontal__end'>
      <p className='text__uppercase border__tb__gold'>Working Hours</p>
      <p>CET <span className='active'>(Nov. to March: UTC + 1)</span> or</p>
      <p>CEST <span className='active'>(April to Oct.: UTC + 2)</span></p>
      <p><span className='active'>Monday</span> to <span className='active'>Friday</span></p>
      <p><span className='active'>9:00AM</span> to <span className='active'>6:00PM</span></p>
    </div>
  );
}
