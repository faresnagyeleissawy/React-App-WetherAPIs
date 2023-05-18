import Card from "./Card";

const Cards = (props) => {
  return (
    <div style={{ display: "inline-flex" }}>
      {props.Countries.map((country) => (
        <Card
          key={Math.floor(Math.random())}
          {...country}
          delete={props.deleteCard}
        />
      ))}
    </div>
  );
};

export default Cards;
