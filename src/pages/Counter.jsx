import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../store/slices/counterSlice"
import React, { useRef } from 'react'
import Navbar from "../components/Navbar"

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    const inputValue = useRef(null)
    return (
        <>
            <Navbar />
            <div className='text-center text-3xl font-semibold text-blue-500 mt-4'>RTK - Counter</div>
            <div className="text-center text-xl">count = {count}</div>
            <div className="flex  justify-center gap pt-2">
                <button className="bg-green-800 mx-2 p-4 rounded-lg text-white hover:bg-green-600" onClick={() => dispatch(increment())}>+</button>
                <button className="bg-red-800 mx-2 p-4 rounded-lg text-white hover:bg-red-600" onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div className="flex flex-col justify-center items-center gap pt-2">
                <p className="text-3xl p-4 text-blue-500 font-semibold">Increment By value!</p>
                <input ref={inputValue} type="number" className="border-2 border-gray-300 rounded-lg p-2 w-1/6" onChange={() => inputValue.current.value} />
                <button onClick={() => dispatch(incrementByAmount(+inputValue.current.value))} className="bg-gray-800 mx-2 my-2 p-4 rounded-lg text-white hover:bg-gray-600">Increment!</button>
            </div>
        </>
    )
}

export default Counter
