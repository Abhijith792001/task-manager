import React, { useState } from 'react'
import Card from '../Card/Card'


function Header() {

  const [model,setModel] = useState(false);


  return (
    <>
      <div className='px-6 mt-6 container mx-auto'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-[#4b0082] mb-1'>Welcome to Abhijith</h1>
        </div>

        <div className='mb-6'>
          <div className='bg-white rounded-2xl p-1 shadow-sm border border-gray-100 inline-block'>
            <button onClick={()=> setModel(true)} className='px-6 py-2.5 bg-[#4b0082] text-white rounded-xl font-medium text-sm shadow-sm hover:bg-[#3d006b] transition-colors'>
              Create Task
            </button>

            {model && (
<div
  aria-hidden="true"
  className={`${model ? 'flex' : 'hidden'} bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
>
  <div className="relative p-4 w-full max-w-md max-h-full">
    <div className="relative bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Create New Todo
        </h3>
        <button
          onClick={() => setModel(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <form className="p-4 md:p-5">
        <div className="mb-4">
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            id="description"
            name="description"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600"
            placeholder="Description"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>

            )}
          </div>
        </div>

        <div className='grid grid-cols-12 gap-6'>

          <Card />

        </div>
        
      </div>
    </>
  )
}

export default Header
