import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';
import WhiteButton from '../Buttons/WhiteButton';

export default function BlogCard({ src, alt, width, height, slug, date, title, text }: { src: string, alt: string, width: number, height: number, slug: string, date: string, title: string, text: string; }) {

  return (
    <div className='container__card__blog'>
      <div className='column'>
        <Image src={src} alt={alt} width={width} height={height} priority />
      </div>
      <div className='container__blog__details'>
        <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Recipe {date}</h6>
        <h5 className={cormorantInfant.className}>{title}</h5>
        <p>{text}</p>
        <WhiteButton link={`/blog/${slug}`} text='Read Full Post' />
      </div>
    </div>
  );
}
