import ReservationForm from '@/components/Forms/ReservationForm';
import Image from 'next/image';

export default function ReservationPage() {
  return (
    <main>
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
