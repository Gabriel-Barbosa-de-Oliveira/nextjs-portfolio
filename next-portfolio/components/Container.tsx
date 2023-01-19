
import { IComponent } from '@/interfaces/IComponent'
import React from 'react'

export default function Container(component?: IComponent) {
  return (
    <div className='container'>
        Container
        {component?.children}
    </div>
  )
}
