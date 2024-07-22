import PostCard from '@/components/Cards/PostCard';
import { cormorantInfant } from '@/fonts';

export default function PostPage() {
  return (
    <main>
      <section>
        <div className='container'>
          <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
            Post
          </h1>
        </div>
        <div className='bg__white'>
          <PostCard />
        </div>
      </section>
    </main>
  );
}
