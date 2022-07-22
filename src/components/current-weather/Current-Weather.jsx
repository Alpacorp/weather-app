import "./Current-Weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Bogotá</p>
          <p className="weather-description">Sunny</p>
        </div>
      </div>
      <img alt="weather" className="wheather-icon" src="icons/01d.png" />
    </div>
  );
};

export default CurrentWeather;
