import ContactBlock from '@/components/Footer/ContactBlock/ContactBlock';
import HoursBlock from '@/components/Footer/HoursBlock/HoursBlock';
import MailingList from '@/components/Footer/MailingList/MailingList';
import Logo from '@/components/Logo/Logo';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

export default function Footer() {
  return (
    <footer className='border__top__gray'>
      <div className='container'>
        <p className='text__underline'>Instagram feed</p>
        <Logo />
        <SocialIcons />
      </div>
      <div className='container content__vertical__top'>
        <ContactBlock />
        <MailingList />
        <HoursBlock />
      </div>
    </footer>
  );
}
