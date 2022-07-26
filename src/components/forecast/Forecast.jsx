import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  console.log("test 1", WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length));

  console.log("test 2", WEEK_DAYS.slice(0, dayInAWeek));

  console.log("dayInAWeeek", dayInAWeek);

  console.log("forecastDays", forecastDays);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list
          ? data.list.splice(0, 7).map((item, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="day">{forecastDays[index]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)} °C /{" "}
                        {Math.round(item.main.temp_max)} °C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    <div className="daily-details-item">
                      <label>Pressure</label>
                      <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-item">
                      <label>Humidty</label>
                      <label>{item.main.humidity} %</label>
                    </div>
                    <div className="daily-details-item">
                      <label>Clouds</label>
                      <label>{item.clouds.all} %</label>
                    </div>
                    <div className="daily-details-item">
                      <label>Speed</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-item">
                      <label>Sea Level</label>
                      <label>{item.main.sea_level} m</label>
                    </div>
                    <div className="daily-details-item">
                      <label>Feels Like</label>
                      <label>{Math.round(item.main.feels_like)} °C</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))
          : "No data"}
      </Accordion>
    </>
  );
};

export default Forecast;
