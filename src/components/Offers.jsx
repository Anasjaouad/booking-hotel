import React from 'react'
import offer_1 from '../assets/offer_1.jpg'
import offer_2 from '../assets/offer_2.jpg'
import offer_3 from '../assets/offer_3.jpg'
import offer_4 from '../assets/offer_4.jpg'

function Offers() {
  const offers = [
    {
      _id: 1,
      title: "Sunny Escape Deal",
      description: "Get a free night stay and morning meal included",
      priceOff: 25,
      expiryDate: "August 31",
      image: offer_1
    },
    {
      _id: 2,
      title: "Romantic Getaway",
      description: "Enjoy a couples massage and candlelight dinner",
      priceOff: 30,
      expiryDate: "September 15",
      image: offer_2
    },
    {
      _id: 3,
      title: "Family Fun Package",
      description: "Kids stay free and complimentary breakfast for all",
      priceOff: 20,
      expiryDate: "December 31",
      image: offer_3
    },
    {
      _id: 4,
      title: "Winter Wonderland",
      description: "Enjoy ski passes and hot cocoa by the fire",
      priceOff: 35,
      expiryDate: "January 31",
      image: offer_4
    }
  ]

  return (
    <section className="py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Special Offers</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto mb-4 text=lg">
          Discover limited-time deals to save more on your next trip.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 ">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={offer.image}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-[#e89755] text-lg font-semibold">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {offer.description}
              </p>
            
              <p className="text-xs text-gray-500 mt-2">Valid until {offer.expiryDate}</p>
              <div className="flex justify-between items-center pt-4">
                <span className="font-bold text-sm">
                  Save {offer.priceOff}%
                </span>
                <button className="text-orange-500 text-sm font-semibold">
                  View Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers
