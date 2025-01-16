import React from 'react'

const Cards = ({ item }) => {
    console.log(item, "ITEMS")
  return (
    <>
        <div className="mt-4 my-3 p-3 ">
            <div className="card bg-base-100 w-92 h-92 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:border dark:bg-slate-900 dark:text-white ">
                <figure>
                    <img className=' w-[400px] h-[300px]  '
                    src={item.image}
                    alt="Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between ">
                    <div className="badge badge-outline">$0{item.price}</div>
                    <div className="badge badge-outline hover:bg-pink-500 hover:text-white py-2 cursor-pointer ">But Now</div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Cards
