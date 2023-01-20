import React, { useState } from 'react'
import Image from 'next/image';

export default function SidebarSocialMedia() {

  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(30);

  return (
    <nav className='fixed-sidebar'>
      <ul className='sidebar-container'>
        <li>
          <a href="https://github.com/Gabriel-Barbosa-de-Oliveira" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Image
              src="/github.svg"
              alt="Github Logo"
              width={width}
              height={height}
              priority
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gab_barbosa_/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={width}
              height={height}
              priority
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-barbosa-de-oliveira/" aria-label="Linkedin" target="_blank" rel="noreferrer">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Logo"
              width={width}
              height={height}
              priority
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/gab_barbosa_dev" aria-label="Twitter" target="_blank" rel="noreferrer">
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={width}
              height={height}
              priority
            /></a>
        </li>
        <li>
          <a href="https://medium.com/@gabriel-barbosa-de-oliveira" aria-label="Medium" target="_blank" rel="noreferrer">
            <Image
              src="/medium.svg"
              alt="Medium Logo"
              width={width}
              height={height}
              priority
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}
