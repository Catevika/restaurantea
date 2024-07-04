import { josefinSans } from '@/fonts';
import Image from 'next/image';

export default function JosefineSign() {
  return (
    <div className='column container__history__josefine col__h__start'>
      <h6 className={`${josefinSans.className} normal text__uppercase`}>Josefine</h6>
      <Image className='small' src='/images/signature.png' alt='' sizes='10vw' width={0} height={0} priority />
    </div>
  );
}
