import Image from 'next/image';

export default function logo() {
  return (
    <p className='logo'>
      <Image src={"/icons/logo.svg"} alt="Restaurantea logo" width={301} height={197} priority />
    </p>
  );
}
