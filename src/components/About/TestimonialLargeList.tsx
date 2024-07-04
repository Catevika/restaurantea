import { testimonials } from '@/app/data';
import TestimonialCardLarge from '@/components/Cards/TestimonialCardLarge';
export default function TestimonialList() {
  return (
    <div className='container content-horizontal-carousel'>
      {testimonials ? testimonials.map((testimonial) => (
        <TestimonialCardLarge key={testimonial.id} src={testimonial.src} alt={testimonial.alt} fullname={testimonial.fullname} city={testimonial.city} text={testimonial.text} />
      )) : null}
    </div>
  );
}
