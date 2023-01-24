import Image from 'next/image'
import React from 'react'
import Button from '../button/button'

export default function Header() {
    return (
        <header className='header-container'>
            <div>
                <a href='/'>
                    <Image
                        src="/gabriel.svg"
                        alt="Gabriel Logo"
                        width={42}
                        height={42}
                        priority
                    />
                </a>
            </div>
            <nav className='header-navigation'>
                <ol>
                    <li>Sobre</li>
                    <li>Experiencia</li>
                    <li>Trabalho</li>
                    <li>Contato</li>
                    <li><Button fillType={'bordered'} text={"Curriculo"} theme={'primary'}></Button></li>
                </ol>
            </nav>
        </header>
    )
}
