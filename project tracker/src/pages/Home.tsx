import React from 'react'

const Home = () => {
  return (
    <>
<div className="flex items-center justify-center min-h-screen px-6">
  <div className="w-full max-w-5xl h-[750px] bg-white py-20 px-16 rounded-3xl shadow-xl flex flex-col items-center justify-center">

    <form className="flex flex-col items-center w-full max-w-md">

      <h1 className="text-3xl font-semibold mb-6 text-center">
        Track Your Project
      </h1>
        <p className='pb-7'>Enter your Project ID below to check the status of your project. 
            This tool provides real-time updates and helps you stay informed about your project's progress.</p>
      <input
        type="text"
        placeholder="Enter Project ID"
        className="border border-gray-300 p-3 rounded-xl w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all">
        Check Status
      </button>

    </form>

  </div>
</div>

  
    </>


  )
}

export default Home