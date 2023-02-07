import { IExperience } from '@/interfaces/IExperience'
import Image from 'next/image'
import React, { Component } from 'react'

export default class Experience extends Component {


  render() {
    const experiences: Array<IExperience> = [
      {
        image: {
          filePath: "/ibm.png",
          alt: "IBM Logo",
          height: 250,
          width: 250
        },
        title: "IBM"
      },
      {
        image: {
          filePath: "/gsw.png",
          alt: "GSW Logo",
          height: 250,
          width: 250
        },
        title: "GSW"
      },
      {
        image: {
          filePath: "/hipr.jpeg",
          alt: "Hipr Sistemas",
          height: 250,
          width: 250
        },
        title: "Hipr"
      }
    ]

    const enterprieseExperiences: Array<JSX.Element> = []

    experiences.forEach((imageData: IExperience) => {
      const { image } = imageData;
      enterprieseExperiences.push(
        <div className='image-container'>
          <Image
            key={imageData.title}
            src={image.filePath}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <span>{imageData.title}</span>
        </div>
      )
    })


    return (
      <section className='experience-container'>
        <h1>Experiência</h1>
        <div className='experience-content'>
          {enterprieseExperiences}
        </div>
      </section>
    )
  }
}
