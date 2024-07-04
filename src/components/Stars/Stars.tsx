import Image from 'next/image';

export default function Stars() {
  return (
    <div className='container__cards container__stars'>
      <Image src='/icons/star-gold.svg' alt='Star icon' width={16} height={16} priority />
      <Image src='/icons/star-gold.svg' alt='Star icon' width={16} height={16} priority />
      <Image src='/icons/star-gold.svg' alt='Star icon' width={16} height={16} priority />
      <Image src='/icons/star-gold.svg' alt='Star icon' width={16} height={16} priority />
      <Image src='/icons/star-gold.svg' alt='Star icon' width={16} height={16} priority />
    </div>
  );
}
