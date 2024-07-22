import AdvantageList from '@/components/About/AdvantageList';
import ChefList from '@/components/About/ChefList';
import TestimonialLargeList from '@/components/About/TestimonialLargeList';
import WhiteButton from '@/components/Buttons/WhiteButton';
import JosefineCard from '@/components/Cards/JosefineCard';
import ReservationForm from '@/components/Forms/ReservationForm';
import JosefineSign from '@/components/JosefineSign/JosefineSign';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            About Us
          </h1>
        </div>
        <div className='bg__white'>
          <div className='container__color__bg'>
            <div className='container container__aboutus'>
              <div className=' column col__h__start container__about left__50'>
                <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>About us</h6>
                <h4 className={cormorantInfant.className}>Quality and Tradition</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit.</p>
                <JosefineSign />
                <WhiteButton link='/about' text='Learn more' />
              </div>
              <div className='container__aboutImg'>
                <Image className='aboutIcon' src='/icons/pattern.svg' alt='' width={284} height={275} priority />
                <Image className='aboutImg' src='/images/about-restaurant-hall.png' alt='' sizes='30vw' width={0} height={0} priority />
                <div className='container__card__josefine'>
                  <JosefineCard src='/images/Josefine.png' alt='CEO photo' fullname='Josefine' occupation='CEO & Founder' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi!' />
                </div>
              </div>
            </div>
            <AdvantageList />
          </div>
        </div>
      </section>
      <section className='bg__white container__chefs__section'>
        <div className='bg__light'>
          <div className='container__color__bg'>
            <div className='container__color__bg'>
              <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Team</h6>
              <h4 className={cormorantInfant.className}>Meet Our Traditonal Chefs</h4>
              <ChefList />
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='container__color__bg'>
          <div className='column'>
            <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Testimonials</h6>
            <h4 className={cormorantInfant.className}>What Our Client say About Us</h4>
            <div className='container__icon__quote__large'>
              <Image className='icon__quote__large' src='/icons/quote-large.svg' alt='' width={284} height={275} priority />
            </div>
          </div>
          <TestimonialLargeList />
        </div>
      </section>
      <section className='container bg__white'>
        <div className='container container__color__bg'>
          <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Gallery</h6>
          <h4 className={cormorantInfant.className}>Our Modern Style</h4>
          <Link href='/gallery'>
            <Image src='/images/gallery.png' alt='' width={1920} height={1034} priority />
          </Link>
        </div>
      </section>
      <section className='container__form'>
        <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
        <ReservationForm />
      </section>
    </main>
  );
}
