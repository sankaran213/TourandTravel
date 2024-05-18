// Preplanned.js
import React from "react";
import { Link } from "react-router-dom";

const Ree = () => {
  return (
    <div>
      <section className="dark:text-white-400 py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="space-y-2 text-center">
          <h1 className="text-5xl font-bold">Blogs</h1>
        </div>
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {preplannedAdventures.map((adventure, index) => (
              <article key={index} className="flex flex-col dark:bg-gray-50">
                <Link
                  to={`/preplanned/${index}`}
                  aria-label={`Explore ${adventure.name}`}
                >
                  <img
                    alt={adventure.name}
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={adventure.image}
                  />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link
                    to={`/preplanned/${index}`}
                    aria-label={`Explore ${adventure.name}`}
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                  >
                    {adventure.name}
                  </Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {adventure.description}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{adventure.duration}</span>
                    <span>Learn More</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const preplannedAdventures = [
  {
    name: "Darjeeling",
    image: "https://source.unsplash.com/200x200/?darjeeling",
    description:
      "Embark on a journey to the picturesque hill station of Darjeeling, known for its tea gardens and stunning views of the Himalayas!",
    duration: "3 days",
  },
  {
    name: "Digha",
    image: "https://source.unsplash.com/200x200/?digha",
    description:
      "Relax on the sandy beaches of Digha and enjoy the tranquil atmosphere of this popular seaside destination!",
    duration: "2 days",
  },
  {
    name: "Sundarbans",
    image: "https://source.unsplash.com/200x200/?sundarbans",
    description:
      "Explore the mangrove forests of the Sundarbans and encounter unique wildlife, including the Bengal tiger!",
    duration: "4 days",
  },
  {
    name: "Murshidabad",
    image: "https://source.unsplash.com/200x200/?murshidabad",
    description:
      "Discover the rich history of Murshidabad, once the capital of the Bengal region, and visit its grand palaces and mosques!",
    duration: "3 days",
  },
  {
    name: "Bishnupur",
    image: "https://source.unsplash.com/200x200/?bishnupur",
    description:
      "Immerse yourself in the art and architecture of Bishnupur, known for its terracotta temples and traditional music!",
    duration: "2 days",
  },
  {
    name: "Jaldapara National Park",
    image: "https://source.unsplash.com/200x200/?jaldapara",
    description:
      "Embark on a thrilling safari in Jaldapara National Park and spot rare wildlife, including the one-horned rhinoceros!",
    duration: "3 days",
  },
  {
    name: "Kolkata",
    image: "https://source.unsplash.com/200x200/?kolkata",
    description:
      "Immerse yourself in the vibrant culture of Kolkata – where history, art, and flavors collide!",
    duration: "5 days",
  },
  // Add more preplanned adventures here
];

export default Ree;
