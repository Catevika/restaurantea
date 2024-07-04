import Links from '@/components/Header/Links';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
export default function Navbar() {

  return (
    <nav className='container__wrap'>
      <Links />
      <SocialIcons />
    </nav>
  );
}
