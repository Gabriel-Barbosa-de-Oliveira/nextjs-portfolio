import { IButton } from '@/interfaces/IButton'
import { IComponent } from '@/interfaces/IComponent'
import React from 'react'

export default function Button(component?: IButton) {

    
    const fillClassType = component?.fillType === "bordered" ? "btn-bordered" : "btn-filled";  
    
    return (
    <button className={`btn ${fillClassType}`}> 
        {component?.text}
    </button>
  )
}
