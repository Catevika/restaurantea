import ContactBlock from '@/components/Footer/ContactBlock';
import HoursBlock from '@/components/Footer/HoursBlock';
import MailingList from '@/components/Footer/MailingList';
import Logo from '@/components/Logo/Logo';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border__top__gray'>
      <div className='container container__footer'>
        <div className='content__feed'>
          <p className='text__underline'>Instagram feed</p>
        </div>
        <Logo />
        <SocialIcons />
      </div>
      <div className='container row__v__top content__footer'>
        <ContactBlock />
        <MailingList />
        <HoursBlock />
      </div>
      <div className='column content__footer'>
        <p>This website is a customized version of:</p>
        <p>© Copyright - Restaurantate | Designed by <Link href='https://www.victorflow.com/' ><span className='active'>VictorFlow</span></Link> Templates - Powered by <span className='active'>Webflow</span></p>
      </div>
    </footer>
  );
}
