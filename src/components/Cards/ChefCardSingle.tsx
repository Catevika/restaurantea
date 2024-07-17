"use client";

import { chefDetails } from '@/app/data';
import Icon from '@/components/Icon/Icon';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import { cormorantInfant } from '@/fonts';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ChefCardSingle() {
  const slug = useParams().slug;
  const currentChef = chefDetails.find((chef) => chef.slug === slug);


  return (
    <div className='container__color__bg bg__white'>
      {currentChef ?
        <div className='container__color__bg'>
          <div className='container container__chef__single'>
            <div className='container-sub__color__bg left__35 container__card__chef container__card__chef__single'>
              <Image src={currentChef.src} alt={currentChef.alt} width={currentChef.width} height={currentChef.height} priority />
            </div>
            <div className='right__65'>
              <div className='col__h__start'>
                <h5 className={cormorantInfant.className}>{currentChef.fullname}</h5>
                <p>{currentChef.title}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime blanditiis ducimus maiores provident. Modi voluptatum ratione, suscipit deleniti optio quaerat aut consectetur ex assumenda veniam accusamus nihil dolores obcaecati unde perferendis voluptatem odit placeat, ea consequatur! Cumque iusto at ipsam?</p>
                <div className='content__chef__single'>
                  <div className='container'>
                    <Icon iconClass='icon__quote__large' src='/icons/experience.svg' alt='' width={63} height={63} />
                    <div className='column col__h__start'>
                      <h5 className={cormorantInfant.className}>Last experience</h5>
                      <p>{currentChef.experience}</p>
                    </div>
                  </div>
                  <div className='container'>
                    <Icon iconClass='icon__quote__large' src='/icons/mail.svg' alt='' width={63} height={63} />
                    <div className='column col__h__start'>
                      <h5 className={cormorantInfant.className}>Email Address</h5>
                      <p>{currentChef.mail}</p>
                    </div>
                  </div>
                  <div className='container'>
                    <Icon iconClass='icon__quote__large' src='/icons/contact.svg' alt='' width={63} height={63} />
                    <div className='column col__h__start'>
                      <h5 className={cormorantInfant.className}>Phone Number</h5>
                      <p>{currentChef.contact}</p>
                    </div>
                  </div>
                  <div className='container'>
                    <Icon iconClass='icon__quote__large' src='/icons/location.svg' alt='' width={63} height={63} />
                    <div className='column col__h__start'>
                      <h5 className={cormorantInfant.className}>Location</h5>
                      <p>Riverside, 25 - San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='column bg__dark container__card__social__icons'>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        : null}
    </div>
  );
}
