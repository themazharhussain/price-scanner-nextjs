import Card from "./Card";

const CardList = () => {
  const cardData = [
    {
      backgroundImage: "/images/features/1.svg",
      primaryText: "Compare Prices Across Stores",
      secondaryText: "Save time and money by finding the best deals instantly",
      offer1: "10% Off",
      offer2: "40% Off",
    },
    {
      backgroundImage: "/images/features/2.svg",
      primaryText: "Personalized Product Tracking",
      secondaryText: "Monitor your wishlist with ease",
    },
    {
      backgroundImage: "/images/features/3.svg",
      primaryText: "Get Alerts for Price Drops",
      secondaryText:
        "Be the first to know when prices drop on your favorite products.",
      offer1: "40% Off",
      offer2: "20% Off",
    },
  ];

  return (
   
      <section id="features" className="flex flex-col md:flex-row gap-10 mb-36 justify-center items-center">
      {cardData.map((data, index) => (
        <Card
          key={index}
          backgroundImage={data.backgroundImage}
          primaryText={data.primaryText}
          secondaryText={data.secondaryText}
          //offer1={data.offer1}
          //offer2={data.offer2}
        />
      ))}
    </section>
   
  );
};

export default CardList;
