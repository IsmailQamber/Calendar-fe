import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import { useState } from "react";
import Sidebar from "./Sidebar";

//Dev express imports
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import { Resources, ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { appointments } from "./demo-data/appointments";

function App() {
  // const localData = (new EventSettingsModel() = {
  //   dataSource: [
  //     {
  //       endTime: new Date(2021, 0, 11, 3, 3),
  //       startTime: new Date(2021, 0, 11, 1, 3),
  //     },
  //   ],
  // });
  // let calendar = new Calendar(calendarEl, {
  //   plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  //   initialView: "dayGridMonth",
  //   headerToolbar: {
  //     left: "prev,next today",
  //     center: "title",
  //     right: "dayGridMonth,timeGridWeek,listWeek",
  //   },
  // });

  const useStyles = makeStyles((theme) => ({
    todayCell: {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      "&:hover": {
        backgroundColor: fade(theme.palette.primary.main, 0.14),
      },
      "&:focus": {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
      },
    },
    weekendCell: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
    },
    today: {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
  }));

  const TimeTableCell = (props) => {
    const classes = useStyles();
    const { startDate } = props;
    const date = new Date(startDate);

    if (date.getDate() === new Date().getDate()) {
      return (
        <WeekView.TimeTableCell {...props} className={classes.todayCell} />
      );
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
      return (
        <WeekView.TimeTableCell {...props} className={classes.weekendCell} />
      );
    }
    return <WeekView.TimeTableCell {...props} />;
  };
  const DayScaleCell = (props) => {
    const classes = useStyles();
    const { startDate, today } = props;

    if (today) {
      return <WeekView.DayScaleCell {...props} className={classes.today} />;
    }
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
    }
    return <WeekView.DayScaleCell {...props} />;
  };
  console.log(appointments);
  let date = moment();
  return (
    <Paper>
      <Scheduler data={appointments}>
        <MonthView />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

export default App;
