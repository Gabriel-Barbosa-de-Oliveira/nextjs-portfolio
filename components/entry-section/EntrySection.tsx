import React, { Component } from 'react'

export default class EntrySection extends Component {
  render() {
    return (
      <section className='entry-container'>
        <div className='entry-content'>
          <span>Ola, meu nome é </span>
          <h1>Gabriel Barbosa </h1>
          <h1 className='subtitle'>Eu sou um Web Developer</h1>
          <p>Sou desenvonvedor de software especializado em construir aplicações web.
            Atualmente atuando como full-stack na <a href='https://www.ibm.com/' rel="noreferrer" target="_blank" className='link'>@IBM</a>
          </p>
        </div>
      </section>
    )
  }
}
