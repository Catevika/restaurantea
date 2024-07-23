import ReverseButton from '@/components/Buttons/ReverseButton';
import BeverageOrderCard from '@/components/Cards/BeverageOrderCard';
import DessertOrderCard from '@/components/Cards/DessertOrderCard';
import MainCourseOrderCard from '@/components/Cards/MainCourseOrderCard';
import PaymentOrderCard from '@/components/Cards/PaymentOrderCard';
import StarterOrderCard from '@/components/Cards/StarterOrderCard';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';
export default function OrderList() {
  return (
    <div className='bg__black'>
      <div className='column'>
        <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Our Free Home Delivery Service</h6>
        <h5 className={cormorantInfant.className}>Your favorite meals within 30min.</h5>
      </div>
      <div className='container__color__bg'>
        <div className='content__menu__section__img'>
          <Image src='/images/beverages-top.png' alt='' width={1400} height={431} priority />
        </div>
        <div className='container-sub__color__bg container__menu__section'>
          <BeverageOrderCard />
        </div>
        <div className='content__menu__section__img'>
          <Image src='/images/starters-top.png' alt='' width={1400} height={431} priority />
        </div>
        <div className='container-sub__color__bg container__menu__section'>
          <StarterOrderCard />
        </div>
        <div className='content__menu__section__img'>
          <Image src='/images/main-course-top.png' alt='' width={1400} height={430} priority />
        </div>
        <div className='container-sub__color__bg container__menu__section'>
          <MainCourseOrderCard />
        </div>
        <div className='content__menu__section__img'>
          <Image src='/images/desserts-top.png' alt='' width={1400} height={430} priority />
        </div>
        <div className='container-sub__color__bg container__menu__section'>
          <DessertOrderCard />
        </div>
        <div className='container-sub__color__bg'>
          <PaymentOrderCard />
        </div>
        <ReverseButton type='submit' text='Go to Cart' />
      </div>
    </div>
  );
}
