import React, { useState } from 'react'
import Image from 'next/image';
import { socialMediaList } from '../../pages/api/socialMedia';
import { ISocialMedia } from '@/interfaces/ISocialMedia';

export default function SidebarSocialMedia() {

  const socialList: Array<JSX.Element> = [];
  socialMediaList.forEach((item: ISocialMedia) => {
    socialList.push(
      <li key={item.id}>
        <a href={item.url} aria-label={item.ariaLabel} target="_blank" rel="noreferrer">
          <Image
            src={item.image.filePath}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
          />
        </a>
      </li>
    )
  });

  return (
    <nav className='fixed-sidebar'>
      <ul className='sidebar-container'>
        {socialList}
      </ul>
    </nav>
  )
}
