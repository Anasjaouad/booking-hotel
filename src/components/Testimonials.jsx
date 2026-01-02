import React from 'react'
import testimonial_1 from '../assets/testimonial_1.jpg'
import testimonial_2 from '../assets/testimonial_2.png'
import testimonial_3 from '../assets/testimonial_3.jpg'
import { FaStar } from "react-icons/fa"

function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Anas Jaouad",
            address: "Casablanca, Morocco",
            image:testimonial_1,
            rating: 5,
            review: "Amazing experience! The hotel was beautiful and the staff were incredibly friendly. Will definitely book again."
        },
        {
            id: 2,
            name: "AbdelAli Zahouani",
            address: "Casablanca, Morocco",
            image:testimonial_2,
            rating: 4,
            review: "Great location and comfortable rooms. The booking process was smooth and hassle-free."
        },
        {
            id: 3,
            name: "Ilyas mahboub",
            address: "wld darhom , Morocco",
            image:testimonial_3,
            rating: 5,
            review: "I had a wonderful stay! The amenities were top-notch and the views were breathtaking."
        }
    ];
  return (
    <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold'>What Our Guests Say</h2>
            <p className='text-gray-600 mb-10 max-w-2xl mx-auto'>Real experiences from real travelers who people love booking with us.</p>
 

            <div className='grid md:grid-cols-3 gap-6'>
                {testimonials.map((testimonial,index) => (
                    <div key={index} className='bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition'>
                        <div className='flex items-center mb-4 gap-4'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 rounded-full object-cover'/> 
                            <div>
                                <h4 className='text-md text-[#e89755] '>{testimonial.name}</h4>
                                <p className='text-gray-500'>{testimonial.address}</p>
                            </div>
                        </div>
                        <div className='flex items-center text-yellow-500 mb-2'>
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <p className='text-gray-700 text-sm'>{testimonial.review}</p>



            </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Testimonials