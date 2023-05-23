import { Link } from "react-router-dom";
const Likedcard = (props) => {
  return (
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
        <Link to={`/posts/${props.location.name}`}>Details</Link>
      </div>
    </div>
  );
};

export default Likedcard;
