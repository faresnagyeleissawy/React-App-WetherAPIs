import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../Store/Action/AvtionCreator";
const Cards = (props) => {
  const newCity = props.Countries.map((city) => {
    return {
      ...city,
      like: false,
    };
  });
  const dispatch = useDispatch();
  dispatch(getCityData(newCity));
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
