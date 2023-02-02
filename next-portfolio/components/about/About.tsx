import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className='about-container'>
            <h1>Sobre</h1>
            <div className='about-content'>
                <div className='about-text'>
                    <p>Oi tudo bem ? Meu nome é Gabriel Barbosa e sou apaixonado por criar aplicações para web</p>

                </div>
                <div className='about-image'>
                    <div className='wrapper-image'>
                        <Image
                            src="/me.jpeg"
                            alt="Gabriel Picture"
                            width={250}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
