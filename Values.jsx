import React from 'react'
import Heading from '../Heading/Heading'
import {FaHeart, FaLeaf, FaShieldAlt , FaSeedling} from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png' 


const Values = () => {

    const leftValues =value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex  items-center gap-7 '>
                <div>
                    <span className='bg-gradient-to-b from-orange-600 to orange-700 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white'>{item.icon}</span>
                </div>
                <div >
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2 '>{item.description}</p>
                </div>
            </div>
        )
    })
    const rightValues =value.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex item-center gap-7  '>
                <div>
                    <span className='bg-gradient-to-b from-orange-600 to orange-700 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white'>{item.icon}</span>
                </div>
                <div className='text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2 '>{item.description}</p>
                </div>
            </div>
        )
    })
  return (
        <div className='max-w-[1400px]mx-auto px-10 py-20'>
            <Heading highlight = 'Our' heading ="Value"/>
            <div className='flex gap-5 mt-15 '>
                {/* Left Values  */}
                <div className='min-h-100 flex flex-col gap-5 justify-between'>
                    {leftValues}
                </div >
                <div className='w-1/2'><img src={Basket}/>
                </div>
            
            {/* Right Values  */}
            <div className='min-h-100 flex flex-col justify-between'>
                {rightValues}
            </div>
            </div>
            
        </div>
  )
}

export default Values

const value = [
    {
       id:1,
       title: 'Trust',
       description : 'It is a long established fact that a reader will be distracted by the readable.',
       icon: <FaHeart/>
    },
     {
       id:2,
       title: 'Always Fresh',
       description : 'It is a long established fact that a reader will be distracted by the readable.',
       icon: <FaLeaf/>
    },
     {
       id:3,
       title: 'Food Safety',
       description : 'Lorem lipsum is simply dummy text of the printing and typesetting industry',
       icon: <FaShieldAlt/>
    },
     {
       id:4,
       title: '100% Organic',
       description : 'Lorem lipsum is simply dummy text of the printing and typesetting industry',
       icon: <FaSeedling/>
    },
]
