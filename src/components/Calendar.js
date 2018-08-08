import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.momentLocalizer(moment);

const style = {
  height: "500px",
};

export default props => (
  <BigCalendar
    events={props.events}
    views={["month"]}
    style={style}
  />
)
