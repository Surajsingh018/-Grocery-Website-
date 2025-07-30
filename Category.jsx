import React from 'react'
import Heading from '../Heading/Heading'
import Fruitveggies from '../../assets/Fruitveggies.png'  // Corrected path
import DairyCat from '../../assets/DairyCat.png'
import SeaFoodCat from '../../assets/SeaFoodCat.png'
import {Link} from 'react-router-dom'

const category = [
    {
        id:1,
        title : 'Fruits & Veggies',
        description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of sesonal fruits and crisp vegetables.",
        image: Fruitveggies,
        path: '/fruits'

    },
    {
        id:2,
        title : 'Dairy & Eggs',
        description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheses.",
        image: DairyCat,
        path: '/dairy'

    },
    {
        id:3,
        title : 'Meat & SeaFood',
        description:"High-Quality, responsible sourced meat and seafood. Choose from fresh cuts,marinated options, and more.",
        image: SeaFoodCat,
        path: '/seafood'

    },
]


const Category = () => {

    const renderCards = category.map(card=>{
        return(
            // Card 
           <div className= 'flex-1 basis-[300px] ' key={card.id}>
            {/* Card Image  */}
            <div className=' w-full min-h-[30vh] relative -mb-10'>
                <img src={card.image} alt={card.title} className='absolute bottom-0'/>
            </div>
            {/* Card Content  */}
            <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                <h3 className='text-zinc-800 text-3xl font-bold'>{card.title}</h3>
                <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                <Link to ={card.path}className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transation-all duration-300 cursor-pointer">Sea All

                </Link>
            </div>
           </div> 
        )
    })


  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
          <Heading  highlight ="Shop" heading =" by Category"/>

          {/* Category Card  */}

          <div className='flex flex-wrap gap-10  md:mt-15 '>
            {renderCards}
          </div>
        </div>
    </section>
  )
}

export default Category

