import { paymentMethods } from '@/app/data';
import { josefinSans } from '@/fonts';

export default function PaymentOrderCard() {
  return (
    <div className='column col__h__start'>
      <h6 className={`${josefinSans.className} text__uppercase border__tb__gold`}>Payment Methods</h6>
      {paymentMethods?.map((payment) => (
        <div key={payment.id} className='container__card__order'>
          <input type='checkbox' id={payment.title} />
          <label htmlFor={payment.title}>{payment.title}</label>
        </div>
      ))}
    </div>
  );
}
