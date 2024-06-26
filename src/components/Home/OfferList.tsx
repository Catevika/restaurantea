import { offers } from '@/app/data';
import OfferCard from '@/components/Cards/OfferCard/OfferCard';
import IconXl from '@/components/Icon/IconXl';
export default function OfferList() {
  return (
    <div className='container container__offers'>
      {offers ? offers.map((offer) => (
        <OfferCard key={offer.id} bckg={offer.bckg} textColor={offer.textColor} iconXl={<IconXl iconClass='icon__xxl' iconSrc={offer.iconSrc} iconWidth={offer.iconWidth} iconHeight={offer.iconHeight} />} textClass={offer.textClass} price={offer.price} percent={offer.percent} product={offer.product} paragraph={offer.paragraph} imgSrc={offer.imgSrc} imgWidth={offer.imgWidth} imgHeight={offer.imgHeight} />
      )) : null}
    </div>
  );
}
