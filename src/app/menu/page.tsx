import WhiteButton from '@/components/Buttons/WhiteButton';
import ReservationForm from '@/components/Forms/ReservationForm';
import BeverageList from '@/components/Menu/BeverageList';
import DessertListMenu from '@/components/Menu/DessertListMenu';
import MainDishListMenu from '@/components/Menu/MainDishListMenu';
import StarterListMenu from '@/components/Menu/StarterListMenu';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Our Card
          </h1>
        </div>
        <div className='bg__white'>
          <div className='container__color__bg'>
            <div className='content__menu__section__img'>
              <Image src='/images/beverages-top.png' alt='' width={1400} height={431} priority />
            </div>
            <div className='container__color__bg container__menu__section'>
              <div className='container__card__menu'>
                <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Beverages</h6>
                <div className='container'>
                  <div className='column left__25 content__beverages__img'>
                    <Image src='/images/cocktails-hero.png' alt='' width={379} height={480} priority />
                  </div>
                  <div className='right__65'>
                    <div className='column'>
                      <BeverageList />
                    </div>
                  </div>
                </div>
              </div>
              <div className='container col__h__start'>
                <WhiteButton link='/order' text='Order for Delivery' />
              </div>
            </div>
            <div className='content__menu__section__img'>
              <Image src='/images/starters-top.png' alt='' width={1400} height={431} priority />
            </div>
            <div className='container__color__bg container__menu__section'>
              <div className='container__card__menu'>
                <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Starters</h6>
                <div className='container'>
                  <div className='column right__65'>
                    <StarterListMenu />
                  </div>
                  <div className='column left__25 content__starters__img'>
                    <Image src='/images/starter-hero.png' alt='' width={379} height={480} priority />
                  </div>
                </div>
              </div>
              <div className='container col__h__start'>
                <WhiteButton link='/order' text='Order for Delivery' />
              </div>
            </div>
            <div className='content__menu__section__img'>
              <Image src='/images/main-course-top.png' alt='' width={1400} height={430} priority />
            </div>
            <div className='container__color__bg container__menu__section'>
              <div className='container__card__menu'>
                <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Main Course</h6>
                <div className='container'>
                  <div className='column left__25 content__starters__img'>
                    <Image src='/images/main-course-hero.png' alt='' width={320} height={481} priority />
                  </div>
                  <div className='column right__65'>
                    <MainDishListMenu />
                  </div>
                </div>
              </div>
              <div className='container col__h__start'>
                <WhiteButton link='/order' text='Order for Delivery' />
              </div>
            </div>
            <div className='content__menu__section__img'>
              <Image src='/images/desserts-top.png' alt='' width={1400} height={430} priority />
            </div>
            <div className='container__color__bg container__menu__section'>
              <div className='container__card__menu'>
                <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Desserts</h6>
                <div className='container'>
                  <div className='column right__65'>
                    <DessertListMenu />
                  </div>
                  <div className='column left__25 content__starters__img'>
                    <Image src='/images/desserts-hero.png' alt='' width={320} height={480} priority />
                  </div>
                </div>
              </div>
              <div className='container col__h__start'>
                <WhiteButton link='/order' text='Order for Delivery' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container__form'>
        <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
        <ReservationForm />
      </section>
    </main>
  );
}
