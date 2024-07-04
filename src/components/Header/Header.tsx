import ReverseButton from '@/components/Buttons/ReverseButton';
import Navbar from '@/components/Header/Navbar';
import Icon from '@/components/Icon/Icon';
import Logo from '@/components/Logo/Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='container__wrap'>
        <p className='phoneNumber'>Call - 987 654 321</p>
        <Logo />
        <p className='container__cart__icon'>
          <Link href='/cart' role='button'>
            <Icon iconClass='icon icon__cart' src='/icons/cart.svg' alt='Cart icon' width={33} height={31} />
          </Link>
          <ReverseButton type='button' text='Reservation' />
        </p>
      </div>
      <div className='border__tb__gray'>
        <Navbar />
      </div>
    </header>
  );
}
