import React, { useState } from 'react'

const Filters = () => {
    const [selectedItem, setSelectedItem] = useState(1)

  return (
    <section className='my-10 py-3 w-3/5 md:4/6 mx-auto flex flex-col 
    md:flex-row justify-around'>
        <button onClick={()=>setSelectedItem(1)}
        className={`btnStyle 
        ${selectedItem==1 ?'bg-green-400 text-white':'bg-slate-400'}`}>
        Latest</button>
        <button onClick={()=>setSelectedItem(2)}
        className={`btnStyle 
        ${selectedItem==2 ?'bg-green-400 text-white':'bg-slate-400'}`}>
            BestSeller</button>
        <button onClick={()=>setSelectedItem(3)}
        className={`btnStyle 
        ${selectedItem==3 ?'bg-green-400 text-white':'bg-slate-400'}`}>
            Special</button>
    </section>
  )
}

export default Filters

//Latest     BestSeller   Special