import React from 'react'

const InfoCard = () => {
    return (
        <div className='m-3 my-5 flex-col justify-center align-middle bg-white/10 backdrop-blur-lg border border-white/2 p-8 rounded-2xl shadow-2xl'>
            <div className='h-fit p-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yytxc15LLLTdRd0VoTe1YgsxMY0Qx3ESNw&s" alt="" />
            </div>
            <div className='h-fit p-2'>
                <h3 className='text-white font-bold text-4xl pb-3'>Name</h3>
                <p className='text-white font-medium text-lg pb-2'>About</p>
                <h6 className='text-blue-600 font-light hover:cursor-pointer hover:underline text-lg pb-2'>Linked in</h6>
            </div>
        </div>
    )
}
export default InfoCard
