import Image from 'next/image';

export default function SocialIcons() {
  return (
    <p className='container__social__icons'>
      <Image className='icon' src={"/icons/instagram.svg"} alt="Instagram icon" width={25} height={23} priority />
      <Image className='icon' src={"/icons/facebook.svg"} alt="Facebook icon" width={25} height={23} priority />
      <Image className='icon' src={"/icons/x.svg"} alt="X icon" width={23} height={23} priority />
      <Image className='icon' src={"/icons/pinterest.svg"} alt="Pinterest icon" width={23} height={23} priority />
    </p>
  );
}
