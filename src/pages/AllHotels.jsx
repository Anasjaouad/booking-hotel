import React, { useState } from 'react'
import allrooms_1 from '../assets/allrooms_1.jpg'
import allrooms_2 from '../assets/allrooms_2.jpg'
import allrooms_3 from '../assets/allrooms_3.jpg'
import allrooms_4 from '../assets/allrooms_4.jpg'
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow, FaStar } from "react-icons/fa";

function AllHotels() {

    const CheckBox = ({ label, selected = false, onChange=()=> {} })=>{
        return (
            <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
                <input type="checkbox" checked={selected} onChange={(e)=> (e.target.checked, label)}  />
                <span className='font-light select-none'>{label}</span>
            </label>
        )
    } 

    const RadioButton = ({ label, selected = false, onChange=()=> {} })=>{
        return (
            <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
                <input type="radio" name='sortOption' checked={selected} onChange={()=> ( label)}  />
                <span className='font-light select-none'>{label}</span>
            </label>
        )
    } 

    const navigate = useNavigate();

    const roomFilter =[
        "Single Room",
        "Double Room",
        "Swimming Pool",
        "Family Suite",
    ]
    const priceFilter =[
        "0 to 500",
        "500 to 1000",
        "1000 to 1500",
        "1500 to 2000",
    ]
    const sortOptions =[
        "Price: Low to High",
        "Price: High to Low",
        "Newest"
    ]  
    const [openFilter,setOpenFilter] =useState(false);
    const roomsData =[
        {
            _id : "a1ff645d3hdyg55df7abc90127",
            hotel: "Grand Palace Hotel",
            roomType: "Deluxe Suite",
            city: "New York",
            pricePerNight: 350,
            address: "123 Main St, New York, NY 10001",
            amenities: ["Free Wi-Fi", "Ocean View", "King Bed", "Breakfast Included"],
            images: allrooms_1,
            rating :5,
            isAvailable: true,
            createdAt : "2023-10-01T10:00:00Z",
            updatedAt : "2023-10-05T12:00:00Z",
            __v: 0
        },
        {
            _id : "b2gg746e4iezh66eg8bcd01238",
            hotel: "Sunrise Resort",
            roomType: "Standard Room",
            city: "Santorini",
            pricePerNight: 200,
            address: "456 Beach Rd, Santorini, Greece",
            amenities: ["Free Parking", "Mountain View", "Queen Bed"],
            images: allrooms_2,
            rating :5,
            isAvailable: false,
            createdAt : "2023-11-15T14:30:00Z",
            updatedAt : "2023-11-20T16:45:00Z",
            __v: 0
        },
        {
            _id : "c3hh857f5jfai77fh9cde12349",
            hotel: "City Lights Hotel",
            roomType: "Executive Suite",
            city: "Tokyo",
            pricePerNight: 450,
            address: "789 Central Ave, Tokyo, Japan",
            amenities: ["City View", "King Bed", "Access to Executive Lounge", "Gym Access"],
            images: allrooms_3,
            rating :4,
            isAvailable: true,
            createdAt : "2023-12-05T10:00:00Z",
            updatedAt : "2023-12-10T12:00:00Z",
            __v: 0
        },
        {
            _id : "d4ii968g6kgbj88gi0def23450",
            hotel: "Mountain View Resort",
            roomType: "Family Room",
            city: "Denver",
            pricePerNight: 300,
            address: "321 Hill St, Denver, CO 80202",
            amenities: ["Free Wi-Fi", "Mountain View", "Two Queen Beds", "Kitchenette"],
            images: allrooms_4,
            rating :4,
            isAvailable: true,
            createdAt : "2023-11-25T10:00:00Z",
            updatedAt : "2023-11-30T12:00:00Z",
            __v: 0
        }
    ]
  return (
    <div className='px-40 flex flex-col-reverse lg:flex-row  justiy-between pt-30 items-start'>
        <div>
            <div className='flex flex-col items-center text-left px-40'>
                <h1 className='text-[#e89755] text-4xl md:text-2xl font-bold'> Hotels Rooms</h1>
                <p className='text-gray-500 mt-2 text-sm max-w-170 mt-2 text-center'>Discover comfortable and stylish rooms tailored to every traveler's needs - from cozy singles to luxurious suites.</p>
                

            </div>
            {roomsData.map((roomData,index) => (
                <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b '>
                    <img onClick={()=>navigate(`/rooms/${roomData._id}`)} className='max-h-65 rounded-l shadow-lg
                    object-cover cursor-pointer' src={roomData.images} />

                    <div>
                        <p>{roomData.hotel}</p>
                        <p>{roomData.city}</p>
                        <div className='flex items-center text-yellow-500 mb-2'>
                            {Array.from({ length: roomData.rating }).map((_, i) => (
                                <FaStar key={i} />
                             ))}
                        </div>

                        <div className='text-gray-500 flex items-center gap-3'>
                             <FaLocationArrow/>
                            <p>{roomData.address}</p>
                         </div>

                            <div>
                                {roomData.amenities.map((items,index) => (
                                    <small className='p-2 rounded-lg bg-gray-200 mr-2'>{items}</small>
                                ))}
                            </div>
                            <p className='text-[#e89755] mt-3 font-bold'>{roomData.pricePerNight}/Night</p>
                     </div>
                 </div>

                    
            ))}

        </div>














        <div className=' p-4 w-80 border border-gray-300 text-gray-600'>

            <div className={`flex items-center justify-between px-4 border-b border-gray-500 ${openFilter && "border-b"}`}>
                <p>FILTERS</p>

                <div>
                    <span onClick={() => setOpenFilter(!openFilter)}
                    className='lg:hidden'>{openFilter?"Hide":"Show"}</span>
                    <span className='hidden lg:block'>Clear</span>
                </div>

            </div>

            <div className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700 `}>

                <div className='px-5 pt-6'>
                    <p className='text-gray-500 pb-2'> Poupluer Filter</p>

                    {roomFilter.map((room,index) => (
                        <CheckBox key={index} label={room} />
                    ))}
                </div>

                <div className='px-5 pt-6'>
                    <p className='text-gray-500 pb-2'> Price Range</p>

                    {priceFilter.map((price,index) => (
                        <CheckBox key={index} label={price} />
                    ))}
                </div>

                <div className='px-5 pt-6'>
                    <p className='text-gray-500 pb-2'> Sort By</p>

                    {sortOptions.map((sort,index) => (
                        <RadioButton key={index} label={sort} />
                    ))}
                </div>


            </div>
            

        </div>
    </div>

    
  )
}

export default AllHotels