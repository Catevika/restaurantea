import { testimonials } from '@/app/data';
import TestimonialCard from '@/components/Cards/TestimonialCard';

export default function TestimonialList() {
  return (
    <div className='container content__horizontal__carousel'>
      {testimonials ? testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} src={testimonial.src} alt={testimonial.alt} fullname={testimonial.fullname} city={testimonial.city} text={testimonial.text} />
      )) : null}
    </div>
  );
}
