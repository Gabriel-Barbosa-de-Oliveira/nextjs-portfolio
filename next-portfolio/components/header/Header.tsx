import Image from 'next/image'
import React from 'react'

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
            <nav>
                <ul> 
                    <li>Sobre</li>
                    <li>Experiencia</li>
                    <li>Trabalho</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}
