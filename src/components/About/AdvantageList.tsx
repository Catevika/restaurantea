import { aboutProducts } from '@/app/data';
import Button from '@/components/Buttons/Button';
import IconCardProduct from '@/components/Cards/IconCardProduct';
import Icon from '@/components/Icon/Icon';

export default function AdvantageList() {
  return (
    <div className='container__cards container__aboutProducts'>
      {aboutProducts ? aboutProducts.map((aboutProduct) => (
        <div key={aboutProduct.id} className='column container_card_aboutProducts'>
          <IconCardProduct icon={<Icon iconClass='icon__large' src={aboutProduct.icon} alt={aboutProduct.alt} width={83} height={83} />} title={aboutProduct.title} paragraph={aboutProduct.paragraph} />
          <Button link={`/product/${aboutProduct.id}`} text='Learn More' />
        </div>
      )) : null}
    </div>
  );
};
