import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../button/Button'

export default function Header() {

    const commonMenuProperties: JSX.Element = (
        <>
            <li>Sobre</li>
            <li>Experiencia</li>
            <li>Trabalho</li>
            <li>Contato</li>
        </>)

    return (<>
        <header className='header-container'>
            <div>
                <Link href='/'>
                    <Image
                        src="/gabriel.svg"
                        alt="Gabriel Logo"
                        width={42}
                        height={42}
                        priority
                    />
                </Link>
            </div>
            <nav className='header-navigation'>
                <ol>
                    {commonMenuProperties}
                    <li><Button fillType={'bordered'} text={"Curriculo"} theme={'primary'}></Button></li>
                </ol>
            </nav>
            <div className='hamburguer-navigation'>
                <input type="checkbox" id="hamburger-input" className="burger-shower" />

                <label id="hamburger-menu" htmlFor="hamburger-input">
                    <Image
                        src="/menu.svg"
                        alt="Menu"
                        width={42}
                        height={42}
                        priority
                    />

                    <nav id="sidebar-menu">
                        <h3>Menu</h3>
                        <ol>
                            {commonMenuProperties}
                            <li>Curriculo</li>
                        </ol>
                    </nav>
                </label>
            </div>
        </header>
    </>
    )
}
