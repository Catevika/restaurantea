import Link from 'next/link';

export default function DesignerBlock() {
  return (
    <div>
      <p>This website is a customized version of:</p>
      <p>© Copyright - Restaurantate | Designed by <Link href='https://www.victorflow.com/' ><span className='active'>VictorFlow</span></Link> Templates - Powered by <span className='active'>Webflow</span></p>
    </div>
  );
}
