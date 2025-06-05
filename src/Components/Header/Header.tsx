import React from 'react'
import Card from '../Card/Card'


function Header() {

    
    return (
        <>
           <div className='px-6 mt-6 container mx-auto'>
 <div className='mb-8'>
   <h1 className='text-2xl font-bold text-[#4b0082] mb-1'>Welcome to Abhijith</h1>
 </div>
 
 <div className='mb-6'>
   <div className='bg-white rounded-2xl p-1 shadow-sm border border-gray-100 inline-block'>
     <button className='px-6 py-2.5 bg-[#4b0082] text-white rounded-xl font-medium text-sm shadow-sm hover:bg-[#3d006b] transition-colors'>
       All Task
     </button>
   </div>
 </div>
 
 <div className='grid grid-cols-12 gap-6'>
   <div className="col-span-12 sm:col-span-6 lg:col-span-4">
     <Card />
   </div>
 </div>
</div>
        </>
    )
}

export default Header
