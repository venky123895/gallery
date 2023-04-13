import React from 'react'
import { useContext } from 'react'
import { GlobalData } from '../App'
import './gallery.css'
const Gallery = () => {
const{data}=useContext(GlobalData)
console.log('data',data)
  return (
    <div className='mainContainer'>
       {
        data.map((ele)=>{
            return(
                <div className="card">
                <img src={ele.urls.regular} alt='images' className='image'/>
                <h3 className='overlay'>{ele.alt_description}</h3>
                </div>
            )
        })
       }
    </div>
  )
}

export default Gallery