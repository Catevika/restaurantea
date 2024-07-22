"use client";

import { posts } from '@/app/data';
import ReverseButton from '@/components/Buttons/ReverseButton';
import { cormorantInfant, josefinSans } from '@/fonts';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function PostCard() {
  const slug = useParams().slug;
  const currentPost = posts.find((post) => post.slug === slug);

  return (
    <div className='container__color__bg bg__white'>
      {currentPost ?
        <div className='container__color__bg'>
          <div className='column col__h__start container__post__single'>
            <h6 className={`${josefinSans.className} border__tb__gold text__uppercase`}>Recipe {currentPost.date}</h6>
            <h5 className={cormorantInfant.className}>{currentPost.title}</h5>
            <div className='container'>
              <div className='container__card__post__single'>
                <Image src={currentPost.src} alt={currentPost.alt} width={currentPost.width} height={currentPost.height} priority />
              </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, voluptates!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime blanditiis ducimus maiores provident. Modi voluptatum ratione, suscipit deleniti optio quaerat aut consectetur ex assumenda veniam accusamus nihil dolores obcaecati unde perferendis voluptatem odit placeat, ea consequatur! Cumque iusto at ipsam?</p>
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, excepturi.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, reiciendis.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, culpa?</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, dolorum!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, officiis!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, recusandae?</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, molestiae.</li>
            </ol>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos odio voluptatum. Id error libero exercitationem qui ipsum corrupti, maiores numquam voluptates dolorum! Incidunt est iusto maiores et repudiandae totam?</p>
          </div>
          <div className='container__card__post__guide'>
            <p>Unlock your culinary potential with</p>
            <p>&apos;<strong>Kitchen Confidence: 100+ Foolproof Recipes and Game-Changing Tips for Beginners</strong>&apos;:</p>
            <p> your all-in-one guide to transforming from kitchen novice to home chef, packed with easy-to-follow recipes, time-saving hacks, and expert tricks that will have you cooking like a pro in no time</p>
            <ReverseButton type='button' text='Get your FREE ebook today!' />
          </div>
        </div>
        : null}
    </div>
  );
}
