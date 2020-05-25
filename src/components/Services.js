import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const serviceList = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, numquam.",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore beatae aliquam molestiae, natus velit repudiandae",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos magni non.",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem vero eaque ipsa iusto?",
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {serviceList.map((service, index) => {
          return (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
