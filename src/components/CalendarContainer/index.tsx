import 'react-calendar/dist/Calendar.css';
import { Value } from "../../common/types/TValue"
import { Dispatch, SetStateAction, RefObject } from 'react';
import { StyledCalendar } from './styles';

interface Props {
    value: Value
    onChange: Dispatch<SetStateAction<Value>>
    ref: RefObject<HTMLDivElement>
}

export default function CalendarContainer({ value, onChange, ref } : Props) {    
    return (
        <StyledCalendar ref={ref} onChange={onChange} value={value} />
    );
}