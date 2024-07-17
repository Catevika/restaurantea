import Button from '@/components/Buttons/Button';
import WhiteButton from '@/components/Buttons/WhiteButton';
import ImageList from '@/components/Gallery/ImageList';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Gallery
          </h1>
        </div>
        <div className='bg__white container__gallery'>
          <div className='container__color__bg content__gallery'>
            <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Our Recipes</h6>
            <ImageList />
          </div>
          <div className='content__gallery__image__bottom'>
            <div className='column col__h__start left__35'>
              <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Reservation</h6>
              <h4 className={cormorantInfant.className}>Your Best Evening Ever</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero!</p>
              <Button link='/reservation' text='Book a table' />
            </div>
          </div>
          <div className='container__color__bg'>
            <div className='container'>
              <div className="column col__h__start left__35">
                <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Feature</h6>
                <h4 className={cormorantInfant.className}>Always Fresh Ingredients</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur labore voluptates commodi eligendi qui eveniet velit perspiciatis, rem quo!</p>
                <WhiteButton link='/menu' text='View Full Menu' />
              </div>
              <div className='right__35'>
                <Image src='/images/fresh-products-hero.png' alt='' width={480} height={480} priority />
              </div>
            </div>
            <div className='container'>
              <div className='left__35'>
                <Image src='/images/fresh-products-recipes.png' alt='' width={480} height={480} priority />
              </div>
              <div className="column col__h__start right__35">
                <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Feature</h6>
                <h4 className={cormorantInfant.className}>Discover our recipes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur labore voluptates commodi eligendi qui eveniet velit perspiciatis, rem quo!</p>
                <WhiteButton link='/recipes' text='View Recipes' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
