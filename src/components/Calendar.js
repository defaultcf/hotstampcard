import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "moment/locale/ja";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("ja");
BigCalendar.momentLocalizer(moment);

const style = {
  height: "500px",
};

export default props => (
  <BigCalendar
    popup
    events={props.events}
    views={["month"]}
    style={style}
  />
)
