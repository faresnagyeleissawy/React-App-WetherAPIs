import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../Store/Action/AvtionCreator";
const ToggleButton = (props) => {
  const [liked, setLiked] = useState(false);
  const store = useSelector((state) => state);
  const cities = store.cityDataReducer.cardCity;
  const dispatch = useDispatch();

  const handleToggle = () => {
    const newCity = cities.map((city) => {
      setLiked(city.like);
      if (city.location.name === props.name) {
        return {
          ...city,
          like: !city.like,
        };
      }
      return {
        ...city,
      };
    });
    console.log(newCity);
    dispatch(getCityData(newCity));
  };

  return (
    <div>
      <button onClick={handleToggle}>{liked ? "Dislike" : "Like"}</button>
    </div>
  );
};

export default ToggleButton;
