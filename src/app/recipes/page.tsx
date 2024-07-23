import ReservationForm from '@/components/Forms/ReservationForm';
import ImageListOverlay from '@/components/Gallery/ImageListOverlay';
import RecipeList from '@/components/Recipes/RecipeList';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';

export default function RecipesPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Recipes
          </h1>
        </div>
        <div className='container__gallery'>
          <div className='container__color__bg content__gallery'>
            <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Our delicious Recipes</h6>
            <h5 className={cormorantInfant.className}>Choose your favorite:</h5>
            <div className='container-sub__color__bg'><ImageListOverlay /></div>
          </div>
        </div>
        <div className='bg__white'>
          <div className='container__color__bg'>
            <RecipeList />
          </div>
        </div>
      </section>
      <section>
        <div className='container__color__bg'>
          <div className='container__form'>
            <Image src='/images/restaurant-reservation.png' alt='' width={1920} height={1080} priority />
            <ReservationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
