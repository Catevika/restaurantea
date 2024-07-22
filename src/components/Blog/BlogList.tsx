import { blogs } from '@/app/data';
import BlogCard from '@/components/Cards/BlogCard';

export default function BlogList() {
  return (
    <div className='container__blog'>
      {blogs ? blogs.map((blog) => (
        <div key={blog.id} id={blog.slug} className='content__blog'>
          <div className='column col__h__start'>
            <BlogCard src={blog.src} alt={blog.alt} width={blog.width} height={blog.height} slug={blog.slug} date={blog.date} title={blog.title} text={blog.text} />
          </div>
        </div>
      )) : null}
    </div>
  );
}
