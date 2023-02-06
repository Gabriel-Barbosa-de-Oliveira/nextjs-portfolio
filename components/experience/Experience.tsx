import Image from 'next/image'
import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <section className='experience-container'>
        <h1>Experiência</h1>
        <div className='experience-content'>
          <div className='image-container'>
            <Image
              src="/ibm.png"
              alt="IBM Logo"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className='image-container'>
            <Image
              src="/gsw.png"
              alt="Gsw Logo"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className='image-container'>
            <Image
              src="/hipr.jpeg"
              alt="Hipr Sistemas Logo"
              width={250}
              height={250}
              priority
            />
          </div>
        </div>


      </section>
    )
  }
}
