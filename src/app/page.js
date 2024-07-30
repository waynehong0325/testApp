"use client"
import { useState } from "react"
function Home() {
  const [state,setAdd]=useState(0)
  const handleAdd =()=>{
    const newState = state+1
    setAdd(newState)
  }
  return (
    <main className="flex items-center justify-center p-24 text-lg">
      <div className="m-3">count : {state}</div>
      <button className="border border-slate-900" onClick={handleAdd}>add</button>
    </main>
  )
}
export default Home
