import React from 'react'
import allrooms_1 from "../../assets/allrooms_1.jpg"
import allrooms_2 from "../../assets/allrooms_2.jpg"
import allrooms_3 from "../../assets/allrooms_3.jpg"
import allrooms_4 from "../../assets/allrooms_4.jpg"


function HotelList() {

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
    <div style={{
        maxWidth:'900px',
        margin:'20px auto',
        fontFamily:'Arial, sans-serf',
        padding:'10px'

    }}>
        <h1 style={{textAlign:'center', marginBottom:'20px'}}>Available Hotels</h1>
        {roomsData.map((room)=>(
            <div style={{
                display:'flex',
                gap:'20px',
                marginBottom:'25px',
                padding:'15px',
                boxShadow:'0 2px 8px rgba(0,0,0,0.1)',
                borderRadius:'8px',
                backgroundColor:room.isAvailable ? '#e0ffe0':'#ffe0e0',
                alignItems:'center',


            }}>
                <img src={room.images} alt={room.hotel} style={{width:'150px', height:'100px', borderRadius:'8px', objectFit:'cover'}}/>
               
                <div style={{flexGrow: 1}} >
                    
                    <h2 style={{margin:'0 0 8px 0'}}>{room.hotel}</h2>
                     
                    <p style={{margin:'4px 0'}}><strong>Room Type:</strong> {room.roomType}</p>
                    <p style={{margin:'4px 0'}}><strong>City:</strong> {room.city}</p>
                    <p style={{margin:'4px 0'}}><strong>Price per Night:</strong> ${room.pricePerNight}</p>

                    <p style={{margin:'4px 0'}}>
                        <strong>Rating</strong>{room.rating}</p>
                    <ul style={{margin:'4px 0', paddingInlineStart:'20px'}}>
                        {room.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>

            </div>
        ))}
    </div>
  )
}

export default HotelList