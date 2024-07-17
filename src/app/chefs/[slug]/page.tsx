
import ChefCardSingle from '@/components/Cards/ChefCardSingle';
import ReservationForm from '@/components/Forms/ReservationForm';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function Chef() {

  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Chef
          </h1>
        </div>
        <div className='bg__white'>
          <ChefCardSingle />
        </div>
      </section>
      <section>
        <div className='container__color__bg'>
          <div className='column col__h__start'>
            <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Expertise</h6>
            <blockquote>
              <p>
                <q>Simplicity is the ultimate sophistication</q>
              </p>
              <footer>Leonardo da Vinci</footer>
            </blockquote>
            <video controls width="100%" src="/videos/chef-single-video.mp4" typeof='video/mp4' />
          </div>
        </div>
        <div className="container__color__bg bg__white content__background__chef__single"></div>
      </section>
      <section className='container__form'>
        <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
        <ReservationForm />
      </section>
    </main>
  );
}


