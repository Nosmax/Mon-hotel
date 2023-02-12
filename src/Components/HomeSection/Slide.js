import React, { useState } from 'react'
import Data from './Data'

const Slide  = (props) => {
    const {slides}=props
    const [current, setCurrent] = useState(0);
   const length = slides.length;

   const nextSlide = () => {
       setCurrent(current === length - 1 ? 0 : current + 1)
   }
   const prevSlide = () => {
       setCurrent(current === 0 ? length - 1 : current - 1);
   }

   console.log(current);
   if (!Array.isArray(slides) || slides.length <= 0){
       return null;
   }



  return (
    <div>
         <section className='slider'>
            <div className='control-btn'>
                 <button className='prev'  onClick={prevSlide} >
                 <i className='fas fa-caret-left'></i>
                 </button> 
                 <button className='next' onClick={nextSlide} >
                 <i className='fas fa-caret-right' ></i>
                 </button> 
            </div> 
         

         {Data.map((slide, index) =>{
            return(
                <div className={index === current ? 'slide active': 'slide'} key={index}>
                     {index === current && <img src={require("../../assets/"+slide.images)}  alt={slide.images} />}
                 </div> 
            )
         } 
         )}

         <section className='container'>
         <div className='slider-form'>
             <h2>Une journée de détente</h2>
             <span>Choisissez l'hotêl qui vous convient</span>  

             <form action="">
                 <input type='text' placeholder='Cherchez une ville' />
                 <div className='flex-space'>
                     <input type='date' placeholder='Choisir' />
                     <input type='date' placeholder='Choisir' />
                 </div>
                 <input type='text' placeholder='Choisir un Hôtel ' />
                 <div className='flex-space'>
                     <input type='number' placeholder='Adulte(s)(+18ans)' />
                     <input type='number' placeholder='Enfant(0 - 17ans)' />
                 </div>
                 <input type='number' placeholder='Chambre' />
                 <input type='submit'value='search' className='submit' />
             </form>
         </div> 
      </section>

         </section>

       
    </div> 
  )
}

export default Slide