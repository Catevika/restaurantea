import Button from '@/components/Buttons/Button';
import ReverseButton from '@/components/Buttons/ReverseButton';
import ReservationForm from '@/components/Forms/ReservationForm';
import DessertList from '@/components/Home/DessertList';
import DetailList from '@/components/Home/DetailList';
import MainDishList from '@/components/Home/MainDishList';
import OfferList from '@/components/Home/OfferList';
import PopularList from '@/components/Home/PopularList';
import ServiceList from '@/components/Home/ServiceList';
import StarterList from '@/components/Home/StarterList';
import TestimonialList from '@/components/Home/TestimonialList';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='column'>
      <section className='container__wrap'>
        <div className='left'>
          <h1 className={cormorantInfant.className}>Welcome&nbsp;to Restaurantea</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
          <Button type='button' link='#menu' text='View Menu' />
        </div>
        <div className="right">
          <Image src='/images/hero.png' alt='' sizes='50vw' width={0} height={0} priority />
        </div>
      </section>
      <section className='column bg__white'>
        <article className='container__color__bg bg__light'>
          <div className='container__color__bg bg__light'>
            <DetailList />
            <div className='container'>
              <Image className='content__about' src='/images/history.png' alt='' sizes='50vw' width={0} height={0} priority />
              <div className='border__left__gray'>
                <div className='column column__content__horizontal__start'>
                  <h4 className={cormorantInfant.className}>The Story</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit minus ab minima, molestias laboriosam excepturi, ipsa facilis fugit iusto libero voluptas voluptate cupiditate.</p>
                </div>
                <div className='container content__vertical__top'>
                  <div className='column'>
                    <h4 className={cormorantInfant.className}>1996</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ea.</p>
                  </div>
                  <div className='column'>
                    <h4 className={cormorantInfant.className}>2021</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius sed quas ut porro eveniet?</p>
                  </div>
                </div>
                <div className='column column__content__horizontal__start'>
                  <h6 className={`${josefinSans.className} normal text__uppercase`}>Josefine</h6>
                  <Image className='small' src='/images/signature.png' alt='' sizes='10vw' width={0} height={0} priority />
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className='container__color__bg bg__white column__content__horizontal__start'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Menu</h6>
          <div className='container content__vertical__top'>
            <div className='left__color__bg'>
              <h4 className={cormorantInfant.className}>Try Our Special Offers</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum eos dicta illum blanditiis magnam saepe nisi explicabo! Fugit, sequi quos! Cumque dolorem neque explicabo.</p>
              <Image src='/images/menu-offer.png' alt='' width={796} height={1096} priority />
              <ReverseButton type='button' link='/menu' text='View Full Menu' />
            </div>
            <div>
              <h4 className={cormorantInfant.className}>Starters</h4>
              <StarterList />
              <h4 className={cormorantInfant.className}>Main course</h4>
              <MainDishList />
              <h4 className={cormorantInfant.className}>Desserts</h4>
              <DessertList />
            </div>
          </div>
        </article>
      </section>
      <section className='container__color__bg column__content__horizontal__start'>
        <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Testimonials</h6>
        <h5 className={cormorantInfant.className}>What our Clients say</h5>
        <p>We love to hear from our customers, so please leave a comment or say hello at <span className='active'>restaurantea-testimonial@gmail.com</span></p>
        <TestimonialList />
      </section>
      <section className='column bg__white'>
        <Image src='/images/suspended-lights.png' alt='' width={1440} height={560} priority />
        <div className='container__color__bg'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Offers</h6>
          <h4 className={cormorantInfant.className}>Our Special Deals</h4>
          <p className='text__horizontal__center left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ipsam.</p>
          <OfferList />
        </div>
        <div className='container__color__bg'>
          <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Menu</h6>
          <h4 className={cormorantInfant.className}>Popular Selection</h4>
          <p className='text__horizontal__center left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, fugiat!</p>
          <PopularList />
        </div>
      </section>
      <section className='container__color__bg column__content__horizontal__start'>
        <div className='container'>
          <div className='left'>
            <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`} id='menu'>Our services</h6>
            <h4 className={cormorantInfant.className}>For your convenience</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur in consectetur, voluptatibus ut quaerat ipsum.</p>
          </div>
          <div><ServiceList /></div>
        </div>
      </section>
      <section className='form__container'>
        <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
        <ReservationForm />
      </section>
    </main>
  );
}
