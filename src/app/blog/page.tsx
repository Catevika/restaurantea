import BlogList from '@/components/Blog/BlogList';
import { cormorantInfant, josefinSans } from '@/fonts';

export default function BlogPage() {
  return (
    <main>
      <section>
        <h1 className={`${cormorantInfant.className} border__tb__gold-h1`}>
          Blog
        </h1>
        <div className='bg__white'>
          <div className='container__color__bg'>
            <div className='container__color__bg'>
              <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Our amazing articles</h6>
              <h5 className={cormorantInfant.className}>Breaking News & Full Recipes from Restaurantea</h5>
              <div className='container__blog__introduction'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus saepe cum voluptates doloribus inventore cumque officia nemo ea voluptatibus, ex tenetur, accusantium eius quibusdam itaque veritatis! Amet reprehenderit eius commodi dignissimos, molestiae sit nihil, suscipit nemo accusamus, accusantium minima voluptate.</p>
              </div>
              <BlogList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
