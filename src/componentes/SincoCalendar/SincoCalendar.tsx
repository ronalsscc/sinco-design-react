


import { useMemo } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import { CalendarToolbar, HeaderDayMonth, getMessagesES } from '.';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import 'moment-timezone'
import { SincoCalendarProps } from './Interfaces';

moment.locale('es');
const localizer = momentLocalizer(moment);

export function SincoCalendar({
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
    ...props }: SincoCalendarProps) {

    const { components } = useMemo(
        () => ({
            components: {
                toolbar: CalendarToolbar,
                month: {
                    header: HeaderDayMonth
                }
            },
        }),
        []
    )

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
            components={components}
            {...props}
        />
    )
}
