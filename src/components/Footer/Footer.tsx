import ContactBlock from '@/components/Footer/ContactBlock/ContactBlock';
import HoursBlock from '@/components/Footer/HoursBlock/HoursBlock';
import MailingList from '@/components/Footer/MailingList/MailingList';
import Logo from '@/components/Logo/Logo';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border__top__gray'>
      <div className='container container__footer'>
        <p className='text__underline content__feed'>Instagram feed</p>
        <Logo />
        <SocialIcons />
      </div>
      <div className='container content__footer content__vertical__top'>
        <ContactBlock />
        <MailingList />
        <HoursBlock />
      </div>
      <div className='column content__footer content__horizontal__center'>
        <p>This website is a customized version of:</p>
        <p>© Copyright - Restaurantate | Designed by <Link href='https://www.victorflow.com/' ><span className='active'>VictorFlow</span></Link> Templates - Powered by <span className='active'>Webflow</span></p>
      </div>
    </footer>
  );
}
