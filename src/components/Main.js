import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import lemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 999,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 499,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: lemonDessert,
    title: "Lemon Dessert",
    price: 399,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <br/><br/>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
