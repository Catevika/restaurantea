import { testimonials } from '@/app/data';
import TestimonialCard from '@/components/Cards/TestimonialCard/TestimonialCard';

export default function TestimonialList() {
  return (
    <div className='container content-horizontal-carousel'>
      {testimonials ? testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} src={testimonial.src} alt={testimonial.alt} fullname={testimonial.fullname} city={testimonial.city} text={testimonial.text} />
      )) : null}
    </div>
  );
}
