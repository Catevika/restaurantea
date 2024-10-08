import { galleryImages } from '@/app/data';
import Icon from '@/components/Icon/Icon';

export default function ImageList() {
  return (
    <div className='content__gallery__images'>
      {galleryImages ? galleryImages.map((galleryimg) => (
        <div key={galleryimg.id}>
          <Icon iconClass='icon__gallery' src={galleryimg.src} alt={galleryimg.alt} width={83} height={83} />
        </div>
      )) : null}
    </div>
  );
}
