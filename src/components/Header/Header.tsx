import ReverseButton from '@/components/Buttons/ReverseButton';
import Navbar from '@/components/Header/Navbar/Navbar';
import Icon from '@/components/Icon/Icon';
import Logo from '@/components/Logo/Logo';

export default function Header() {
  return (
    <header>
      <div className='container__cards'>
        <p className='phoneNumber'>Call - 987 654 321</p>
        <Logo />
        <p>
          <Icon iconClass='icon icon__cart' src='/icons/cart.svg' alt='Cart icon' width={33} height={31} />
          <ReverseButton type='button' link='/cart' text='Reservation' />
        </p>
      </div>
      <div className='border__tb__gray'>
        <Navbar />
      </div>
    </header>
  );
}
