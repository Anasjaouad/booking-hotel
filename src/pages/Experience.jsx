import React from "react";
import {
  FaSpa,
  FaSwimmingPool,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

import exp1 from "../assets/hotel_1.jpg";
import exp2 from "../assets/hotel_5.jpg";
import exp3 from "../assets/hotel_6.jpg";

function Experience() {
 
  const services = [
    {
      id: 1,
      title: "Luxury Spa",
      desc: "Relax with premium spa treatments and wellness services.",
      icon: <FaSpa />,
    },
    {
      id: 2,
      title: "Infinity Pool",
      desc: "Enjoy panoramic views from our infinity swimming pool.",
      icon: <FaSwimmingPool />,
    },
    {
      id: 3,
      title: "Fine Dining",
      desc: "Experience gourmet meals prepared by top chefs.",
      icon: <FaUtensils />,
    },
    {
      id: 4,
      title: "Free High-Speed Wi-Fi",
      desc: "Stay connected anywhere in the hotel.",
      icon: <FaWifi />,
    },
  ];


  const userExperiences = [
    {
      id: 1,
      name: "Emily Carter",
      country: "Paris, France",
      image: exp1,
      review:
        "The experience was absolutely wonderful. The staff was friendly and the services were top-notch.",
    },
    {
      id: 2,
      name: "John Miller",
      country: "New York, USA",
      image: exp2,
      review:
        "Beautiful hotel with amazing views. Everything was clean and well organized.",
    },
    {
      id: 3,
      name: "Sara Lopez",
      country: "Madrid, Spain",
      image: exp3,
      review:
        "One of the best hotel experiences I've ever had. Highly recommended!",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">


        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hotel Experience
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Enjoy premium services designed to give you comfort, luxury,
            and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl text-[#e89755] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>


        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Guest Experiences
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real stories from guests who enjoyed unforgettable stays with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={exp.image}
                alt={exp.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#e89755]">
                  {exp.name}
                </h4>
                <span className="text-sm text-gray-500">
                  {exp.country}
                </span>

                <p className="text-gray-600 text-sm mt-3">
                  “{exp.review}”
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
