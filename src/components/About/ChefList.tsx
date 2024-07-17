import { chefs } from '@/app/data';
import ChefCard from '@/components/Cards/ChefCard';

export default function ChefList() {
  return (
    <div className='container__cards container__chefs'>
      {chefs ? chefs.map((chef) => (
        <div key={chef.id} className='column container__card__chefs'>
          <ChefCard src={chef.src} alt={chef.alt} width={chef.width} height={chef.height} fullname={chef.fullname} title={chef.title} slug={chef.slug} />
        </div>
      )) : null}
    </div>
  );
}
