import React from 'react';
import { Calendar, momentLocalizer, Views, Event, stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer(moment);

interface BigCalendarProps {
    events: Event[];
    startAccessor?: (event: Event)=> Date;
    endAccessor?: (event: Event)=> Date;
    titleAccessor?: string;
    defaultView?: Views;
    selectable?: boolean;
    onSelectEvent?: (event: Event) => any;
    onDoubleClickEvent?: (event: Event) => any;
    onShowMore?: (events: Event[], date: Date) => any
    onSelectSlot?: (slotInfo: {
        start: stringOrDate;
        end: stringOrDate;
        slots: Date[];
    }) => void;
    [key: string]: any; 
};

const MiCalendario: React.FC<BigCalendarProps> = ({
    events,
    startAccessor = 'start',
    endAccessor = 'end',
    titleAccessor = 'title',
    defaultView = Views.MONTH,
    selectable = true,
    onSelectEvent,
    onSelectSlot,
    onDoubleClickEvent,
    onShowMore,
    ...props
}) => {
    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor={startAccessor}
            endAccessor={endAccessor}
            titleAccessor={titleAccessor}
            defaultView={defaultView}
            selectable={selectable}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            onDoubleClickEvent={onDoubleClickEvent}
            onShowMore={onShowMore}
            {...props}
        />
    );
};

export default MiCalendario;
