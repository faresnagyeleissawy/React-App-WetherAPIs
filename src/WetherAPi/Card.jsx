import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../Store/Action/AvtionCreator";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const cities = store.cityDataReducer.cardCity;
  const name = props.location.name;

  const deleteCard = async () => {
    await props.delete(props);
  };

  const handleToggle = () => {
    const newCity = cities.map((city) => {
      if (city.location.name === name) {
        return {
          ...city,
          like: !city.like,
        };
      }
      return city;
    });

    dispatch(getCityData(newCity));
    setLiked(!liked);
  };

  return (
    <div>
      <div className="card">
        <h2 className="card-title">{props.location.name}</h2>
        <div className="card-body">
          <h3>Temp: {props.current.temp_c}</h3>
          <p>Region: {props.location.region}</p>
          <p>Country: {props.location.country}</p>
          <p>Latitude:{props.location.lat}</p>
          <p>Longitude: {props.location.lon}</p>
          <p>Timezone: {props.location.tz_id}</p>
          <p>Local Time: {props.location.localtime}</p>
        </div>
        <button onClick={deleteCard}>Clear</button>
        <Link to={`/posts/${name}`}>Details</Link>
        <button onClick={handleToggle}>{liked ? "Dislike" : "Like"}</button>
      </div>
    </div>
  );
};

export default Card;
