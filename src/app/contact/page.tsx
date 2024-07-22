import DetailList from '@/components/Home/DetailList';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Contact
          </h1>
        </div>
        <div className='bg__white'>
          <div className='container__color__bg'>
            <div className='container__color__bg bg__light'>
              <div className='container__color__bg'>
                <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Restaurantea</h6>
                <div className='container__contact'>
                  <DetailList />
                </div>
                <Image src='/images/suspended-lights.png' alt='' width={1440} height={560} priority />
                <div className='column bg__dark container__card__social__icons'>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
