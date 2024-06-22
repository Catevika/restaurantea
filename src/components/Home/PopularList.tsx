import { populars } from '@/app/data';
import PopularCard from '@/components/Cards/PopularCard/PopularCard';

export default function PopularList() {
  return (
    <div className='container content__vertical__top'>
      {populars ? populars.map((popular) => (
        <PopularCard key={popular.id} src={popular.src} width={popular.width} height={popular.height} title={popular.title} price={popular.price} paragraph={popular.paragraph} />
      )) : null}
    </div>
  );
}
