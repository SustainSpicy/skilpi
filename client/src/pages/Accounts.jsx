import React from "react";
import Header from "../components/Header";
import SocialCard from "../components/SocialCard";

const cardData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?w=360",
    title: "Facebook",
    description: "Manage facebook groups and pages",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg",
    title: "Instagram",
    description: "Manage instagram profiles and feed",
  },
  // Add more card data as needed
];

const Accounts = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {cardData.map((item, index) => {
          return <SocialCard key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Accounts;
