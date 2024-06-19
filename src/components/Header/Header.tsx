import Button from '@/components/Buttons/Button';
import ReverseButton from '@/components/Buttons/ReverseButton';
import Navbar from '@/components/Header/Navbar/Navbar';
import Icon from '@/components/Icon/Icon';
import Logo from '@/components/Logo/Logo';

export default function Header() {
  return (
    <header className='border__top__gray'>
      <div className='container'>
        <Button text='Call - 987 654 321' />
        <Logo />
        <Icon src='/icons/cart.svg' alt='Cart icon' width={33} height={31} />
        <ReverseButton text='Reservation' />
      </div>
      <div className='border__tb__gray'>
        <Navbar />
      </div>
    </header>
  );
}
