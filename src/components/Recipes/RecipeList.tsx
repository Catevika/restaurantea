import { recipes } from '@/app/data';
import Icon from '@/components/Icon/Icon';
import { cormorantInfant } from '@/fonts';

export default function RecipeList() {
  return (
    <div className='container__color__bg'>
      <div className='content__recipes'>
        {recipes ? recipes.map((recipe) => (
          <div key={recipe.id} id={recipe.slug} className='container__recipes'>
            <div className='container container__recipes__details'>
              <div className='left_35'>
                <p className='text__uppercase border__tb__gold'><strong>Category:</strong> {recipe.category}</p>
                <Icon iconClass='icon__gallery' src={recipe.src} alt={recipe.alt} width={83} height={83} />
              </div>
              <div className='right__65 content__recipe'>
                <h5 className={cormorantInfant.className}>{recipe.name}</h5>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Description:</strong> {recipe.description}</p>
              </div>
            </div>
            <hr className='hr__color__gold' />
          </div>
        )) : null}
      </div>
    </div>
  );
}
