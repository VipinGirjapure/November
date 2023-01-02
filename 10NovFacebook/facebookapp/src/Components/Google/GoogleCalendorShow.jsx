import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button } from "@mui/material";
import { Box } from "@mui/system";
const API_KEY = "AIzaSyDMmctVSAiVJesrluNeE7ZjVIuad8d0Fdc";
const GoogleCalendorShow = (props) => {
  // showingEvents = () => {
  //   let titleAndDate = this.props.events.map((item) => item);
  //   console.log("titleAndDate)", ...titleAndDate.map((i) => i.summary));
  // };
  const eventData = props.events?.map((event) => {
    const title = event.summary;
    const date = event.start.dateTime;
    return { title, date, id: event.id };
  });
  //   console.log()
  return (
    <>
      {props.isLogIn ? (
        <Box sx={{ width: "100%" }}>
          <FullCalendar
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right:
                "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayButton",
            }}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[...eventData]}
            googleCalendarApiKey={API_KEY}
            eventContent={(event) => {
            
              return (
                <div>
                  <h6>{event.event.title}</h6>
                  <button id={event.event.id} onClick={()=>props.executeDelete(event.event.id)}>
                    Delete{event.event.id}
                  </button>
                </div>
              );
            }}
          />
        </Box>
      ) : null}
    </>
  );
};

export default GoogleCalendorShow;
