import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = (props) => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=be1e7c74611b43d4a1e225006230603&q=${id}&days="1"&aqi=no&alerts=no`;

    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {data && (
        <div>
          <div class="card">
            <h2 class="card-title">{data["location"]["name"]}</h2>
            <div class="card-body">
              <h3>Tem: {data["current"]["temp_c"]}</h3>
              <p>Region: {data["location"]["region"]}</p>
              <p>Country: {data["location"]["country"]}</p>
              <p>Latitude: {data["location"]["lat"]}</p>
              <p>Longitude: {data["location"]["lon"]}</p>
              <p>Timezone:{data["location"]["tz_id"]}</p>
              <p>localtime:{data["location"]["localtime"]}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CardDetails;
