import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// import list from '../../public/list.json'
import Cards from './Cards';

const Freebook = () => {
    // const filterData = list.filter((data)=>data.category==="Free")

    const [freeBooks, setFreeBooks] = useState([])

    useEffect(() => {
      const getBooks = async ()=>{
         try {
          const res = await axios.get('http://localhost:4001/book')
          console.log("IRFAN",res.data)
          setFreeBooks(res.data.filter((data)=>data.category==="Free"))
         } catch (error) {
          console.log("IRFAN",error)
         }
      }
      getBooks()
    }, [])
    
  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 ' >
            <div className="">
                <h1 className=' font-semibold text-xl pb-2 ' >Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eos minus atque illo cum! Autem consequuntur ipsam id hic doloremque dolore eum quidem alias earum. </p>
       
            </div>

            <div className="">
            <Slider {...settings}>
                {
                    freeBooks.map((item)=>(
                        <Cards item={item} key={item.id}  />
                    ))
                }
            </Slider>
            </div>
        </div>
    </>
    
  )
}

export default Freebook