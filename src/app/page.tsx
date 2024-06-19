import Button from '@/components/Buttons/Button';
import DetailList from '@/components/Home/DetailList';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';


// TODO Reprendre à Josephine

export default function HomePage() {
  return (
    <main className='column'>
      <section className='container__wrap'>
        <div className='left'>
          <h1 className={cormorantInfant.className}>Welcome&nbsp;to Restaurantea</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
          <Button text='View Menu' />
        </div>
        <div className="right">
          <Image src='/images/hero.png' alt='' sizes='50vw' width={0} height={0} priority />
        </div>
      </section>
      <section className='container bg__white'>
        <div className='container__color__bg bg__light'>
          <DetailList />

          <div className='container__color__bg bg__light'>
            <div className='container'>
              <Image src='/images/history.png' alt='' sizes='50vw' width={0} height={0} priority />
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
                  <h6 className={`${josefinSans.className} normal uppercase`}>Josefine</h6>
                  <Image className='small signatureImg' src='/images/signature.png' alt='' width={156} height={85.73} priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
