import { galleryImages } from '@/app/data';
import Icon from '@/components/Icon/Icon';
import Link from 'next/link';

export default function ImageListOverlay() {
  return (
    <div className='content__gallery__images'>
      {galleryImages ? galleryImages.map((galleryimg) => (
        <Link className='icon__gallery__link' key={galleryimg.id} href={`/recipes/#${galleryimg.slug}`}>
          <Icon iconClass='icon__gallery' src={galleryimg.src} alt={galleryimg.alt} width={83} height={83} />
          <p className='overlay'><span>{galleryimg.category} recipe</span><span><strong>{galleryimg.name}</strong></span></p>
        </Link>
      )) : null}
    </div>
  );
}
