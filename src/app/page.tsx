import Button from '@/components/Buttons/Button';
import WhiteButton from '@/components/Buttons/WhiteButton';
import ReservationForm from '@/components/Forms/ReservationForm';
import DessertList from '@/components/Home/DessertList';
import DetailList from '@/components/Home/DetailList';
import MainDishList from '@/components/Home/MainDishList';
import OfferList from '@/components/Home/OfferList';
import PopularList from '@/components/Home/PopularList';
import ServiceList from '@/components/Home/ServiceList';
import StarterList from '@/components/Home/StarterList';
import TestimonialList from '@/components/Home/TestimonialList';
import JosefineSign from '@/components/JosefineSign/JosefineSign';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <section className='container__color__bg__hero'>
        <div className='column col__h__start left__35'>
          <h1 className={cormorantInfant.className}>Welcome&nbsp;to Restaurantea</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
          <Button link='/menu' text='View Full Menu' />
        </div>
      </section>
      <section className='column bg__white container__detailList'>
        <Image className='heroImg' src='/images/hero.png' alt='' sizes='30vw' width={0} height={0} priority />
        <article className='container__color__bg bg__light container__detailList__article'>
          <div className='container-sub__color__bg bg__light'>
            <DetailList />
            <div className='container container__history'>
              <div className='left__60'>
                <Image src='/images/history.png' alt='' sizes='50vw' width={0} height={0} priority />
              </div>
              <div className='right__40 border__left__gray'>
                <div className='column col__h__start'>
                  <h5 className={cormorantInfant.className}>The Story</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nihil totam quisquam placeat, nesciunt consectetur mollitia debitis vel? Asperiores, delectus.</p>
                </div>
                <div className='container row__v__top content__history'>
                  <div className='column'>
                    <h5 className={cormorantInfant.className}>1996</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div className='column'>
                    <h5 className={cormorantInfant.className}>2021</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque!</p>
                  </div>
                </div>
                <JosefineSign />
              </div>
            </div>
          </div>
        </article>
        <article className='container__color__bg bg__white col__h__start container__todayMenu'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Today&apos;s Menu</h6>
          <div className='container row__v__top container__dishes'>
            <div className='column col__h__start left__25'>
              <h4 className={cormorantInfant.className}>Chef&apos;s Special of the Day</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum eos dicta illum blanditiis magnam saepe nisi explicabo! Fugit, sequi quos! Cumque dolorem neque explicabo.</p>
              <Image src='/images/menu-offer.png' alt='' width={796} height={1096} priority />
              <WhiteButton link='/menu' text='View Full Menu' />
            </div>
            <div className='right__65'>
              <div className='column col__h__start content__card__home__menu'>
                <h4 className={cormorantInfant.className}>Daily specials - Starters</h4>
                <StarterList />
              </div>
              <div className='column col__h__start content__card__home__menu'>
                <h4 className={cormorantInfant.className}>Daily specials - Main course</h4>
                <MainDishList />
              </div>
              <div className='column col__h__start content__card__home__menu'>
                <h4 className={cormorantInfant.className}>Daily specials - Desserts</h4>
                <DessertList />
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='container__color__bg col__h__start'>
        <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Testimonials</h6>
        <h4 className={cormorantInfant.className}>What our Clients say</h4>
        <p>We love to hear from our customers, so please leave a comment or say hello at <span className='active'>restaurantea-testimonial@gmail.com</span></p>
        <TestimonialList />
      </section>
      <section className='column bg__white'>
        <Image src='/images/suspended-lights.png' alt='' width={1440} height={560} priority />
        <div className='container__color__bg'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Offers</h6>
          <h4 className={cormorantInfant.className}>Our Special Deals</h4>
          <p className='text__horizontal__center left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ipsam.</p>
          <OfferList />
        </div>
        <div className='container__color__bg container__home__menu'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Menu</h6>
          <h4 className={cormorantInfant.className}>Popular Selection</h4>
          <p className='text__horizontal__center left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, fugiat!</p>
          <PopularList />
        </div>
      </section>
      <section className='container__color__bg col__h__start'>
        <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Our services</h6>
        <div className='content__services'>
          <h4 className={cormorantInfant.className}>For your convenience</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur in consectetur, voluptatibus ut quaerat ipsum.</p>
        </div>
        <ServiceList />
      </section>
      <section className='container__form'>
        <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
        <ReservationForm />
      </section>
    </main>
  );
}
