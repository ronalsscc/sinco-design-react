import React from 'react';
import { Calendar, momentLocalizer, Views, Event, stringOrDate } from 'react-big-calendar';
import { CalendarToolbar, getMessagesES } from '.';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment-timezone'

moment.locale('es');
const localizer = momentLocalizer(moment);

interface SincoCalendarProps {
    events: Event[];
    startAccessor?: string | ((event: Event) => Date);
    endAccessor?: string | ((event: Event) => Date);
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

export function SincoCalendar({ events,
    startAccessor = 'start',
    endAccessor = 'end',
    titleAccessor = 'title',
    defaultView = Views.MONTH,
    selectable = true,
    onSelectEvent,
    onSelectSlot,
    onDoubleClickEvent,
    onShowMore,
    ...props }: SincoCalendarProps) {

    return (
        <Calendar
            culture='es'
            localizer={localizer}
            events={events}
            startAccessor={startAccessor}
            endAccessor={endAccessor}
            titleAccessor={titleAccessor}
            defaultView={defaultView}
            selectable={selectable}
            messages={getMessagesES()}
            onSelectEvent={onSelectEvent}
            onSelectSlot={onSelectSlot}
            onDoubleClickEvent={onDoubleClickEvent}
            onShowMore={onShowMore}
            components={{
                toolbar: CalendarToolbar
            }}
            {...props}
        />
    )

}

//     events,
//     startAccessor = 'start',
//     endAccessor = 'end',
//     titleAccessor = 'title',
//     defaultView = Views.MONTH,
//     selectable = true,
//     onSelectEvent,
//     onSelectSlot,
//     onDoubleClickEvent,
//     onShowMore,
//     ...props
// }) => {
//     return (
//         <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor={startAccessor}
//             endAccessor={endAccessor}
//             titleAccessor={titleAccessor}
//             defaultView={defaultView}
//             selectable={selectable}
//             onSelectEvent={onSelectEvent}
//             onSelectSlot={onSelectSlot}
//             onDoubleClickEvent={onDoubleClickEvent}
//             onShowMore={onShowMore}
//             {...props}
//         />
//     );
// };

// export default MiCalendario;