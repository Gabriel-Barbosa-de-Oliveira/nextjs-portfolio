import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className='about-container'>
            <h1>Sobre</h1>
            <div className='about-content'>
                <div className='about-text'>
                    <p>Oi tudo bem ? Meu nome é Gabriel Barbosa e sou apaixonado por criar aplicações para web.
                        Meu interesse por desenvolvimento de software começou em 2011 quando fiz um curso de web master.
                        Mas me apaixonei de fato por desenvolvimento web na faculdade em 2015, quando inicei o curso de Análise e desenvolvimento de sistemas.</p>
                    <p>Desde la venho me dedicando a estudar técnicas de desenvolvimento web e aplicando isso para grandes empresas e sistemas de grande porte. 
                       Desenvolvo para ajudar pessoas a alcançar seus objetivos</p>
                    <p>Recentemente fiz uma palestra para o CDG São José dos campos sobre TDD e a importância de testes unitários</p>
                    <p>Atualmente trabalho com a seguinte stack: </p>

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
