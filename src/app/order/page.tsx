import OrderList from '@/components/Order/OrderList';
import { cormorantInfant } from '@/fonts';

export default function OrderPage() {
  return (
    <main>
      <section>
        <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
          Order
        </h1>
        <div className='container__color__bg'>
          <OrderList />
        </div>
      </section>
    </main>
  );
}
