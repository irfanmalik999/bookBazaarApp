import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import axios from 'axios'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'

const Course = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async ()=>{
       try {
        const res = await axios.get('http://localhost:4001/book')
        console.log("IRFAN",res.data)
        setBooks(res.data)
       } catch (error) {
        console.log("IRFAN",error)
       }
    }
    getBooks()
  }, [])
  

  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 ' >
        <div className=" pt-32 items-center text-center justify-center  ">
          <h1 className=' text-2xl font-medium md:text-4xl ' >We are delighted to have you <span className=" text-green-500 ">Here!:)</span> </h1>
          <p className=' mt-10 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquam impedit esse ut dolore quae blanditiis, reiciendis maxime expedita non fugiat reprehenderit ea omnis saepe suscipit recusandae earum amet modi sapiente exercitationem fugit totam quibusdam! Deserunt, eum ipsa aspernatur tempore reprehenderit totam voluptatibus, asperiores libero eligendi delectus soluta placeat? Sunt.</p>
          <Link to='/' >
            <button className=' bg-pink-500 text-white px-4 py-1 text-lg mt-6 rounded-lg hover:bg-pink-700 duration-300 ' >Back</button>
          </Link>
        </div>

        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {
            books.map((item)=> (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>

      </div>
    </>
    
  )
}

export default Course 