import Likedcard from "./Likedcard";
import { useSelector } from "react-redux";
const LikedCities = () => {
  const store = useSelector((state) => state);
  const cities = store.cityDataReducer.cardCity;
  const favCities = cities.filter((city) => city.like === true);
  return (
    <>
      {favCities && (
        <div style={{ display: "inline-flex" }}>
          {favCities.map((country) => (
            <Likedcard key={Math.floor(Math.random())} {...country} />
          ))}
        </div>
      )}
    </>
  );
};

export default LikedCities;
