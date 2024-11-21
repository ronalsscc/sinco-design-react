import { Views, Event, stringOrDate } from 'react-big-calendar';


export interface SincoCalendarProps {
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