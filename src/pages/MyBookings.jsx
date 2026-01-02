import React from 'react'
import allrooms_1 from "../assets/allrooms_1.jpg";
import allrooms_2 from "../assets/allrooms_2.jpg";

function MyBookings() {


     const userBookingsData = [
        {
            _id : "bk101ncj8392jd92jdj9201",
            user : "John Doe",
            image: allrooms_1,
            hotel: "Grand Palace Hotel",
            checkInDate: "2023-12-20T15:00:00Z",
            checkOutDate: "2023-12-25T11:00:00Z",
            totalPrice: 1750,
            guests: 2,
            status: "Confirmed",
            paymentMethod: "Credit Card",
            isPaid: true,
            createdAt : "2023-11-01T10:00:00Z",
            updatedAt : "2023-11-05T14:30:00Z",
            __v: 0
        },
        {
            _id : "bk202ndk8392jd92jdj9202",
            user : "Jane Smith",
            image:allrooms_2,
            hotel: "Sunrise Resort",
            checkInDate: "2023-12-20T15:00:00Z",
            checkOutDate: "2023-12-25T11:00:00Z",
            totalPrice: 1750,
            guests: 3,
            status: "Confirmed",
            paymentMethod: "PayPal",
            isPaid: false,
            createdAt : "2023-11-01T10:00:00Z",
            updatedAt : "2023-11-05T14:30:00Z",
            __v: 0
        }
    ]

  return (
    <div  className='p-8 pt-40'>
        <h1 className='text-3xl font-bold mb-6 text-center'>My Bookings</h1>
        <div className='overflow-x-auto'>
            <table  className='min-w-full bg-white shadow-md rounded-xll overflow-hidden'>
                <thead className='bg-gray-100'>
                    <tr className='text-left text-gray-600 uppercase text-sm'>
                        <th className='py-3 px-4'> User</th>
                        <th className='py-3 px-4'> Image</th>
                        <th className='py-3 px-4'> Hotel</th>
                        <th className='py-3 px-4'> Guests</th>
                        <th className='py-3 px-4'> Check-In</th>
                        <th className='py-3 px-4'> Check-Out</th>
                        <th className='py-3 px-4'> Total Price</th>
                        <th className='py-3 px-4'> Status</th>
                        <th className='py-3 px-4'> Payment</th>
                    </tr>
                </thead>

                <tbody>

                    {userBookingsData.map((booking) => (
                        <tr key={booking._id} className='border-t hover:bg-gray-50'>
                            
                            <td className='py-3 px-4 font-medium '>{booking.user}</td>
                            <td className='py-3 px-4'><img className='w-20 h-12 object-cover rounded' src={booking.image} /></td>

                            <td className='py-3 px-4 font-medium '>{booking.hotel}</td>
                            <td className='py-3 px-4 font-medium'>{booking.guests}</td>
                            <td className='py-3 px-4 '>{new Date(booking.checkInDate).toLocaleDateString()}</td>
                            <td className='py-3 px-4 '>{new Date(booking.checkOutDate).toLocaleDateString()}</td>
                            <td className='py-3 px-4 font-medium'>{booking.totalPrice}$</td>
                            <td className='py-3 px-4 font-medium'>
                                {booking.status === "Confirmed" ? (
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Confirmed</span>
                                ) : (
                                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Cancelled</span>
                                )}
                            </td>
                            <td className='py-3 px-4'>
                                {booking.isPaid ? (
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Paid {booking.paymentMethod}</span>
                                ) : (
                                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending {booking.paymentMethod}</span>
                                )}
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyBookings