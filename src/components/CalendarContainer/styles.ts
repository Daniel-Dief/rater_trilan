import styled from 'styled-components';
import Calendar from 'react-calendar';

export const StyledCalendar = styled(Calendar)`
  width: 280px;
  padding: 12px;
  border-radius: 24px;
  background-color: #191919;
  border: none;


  .react-calendar__navigation__label__labelText, .react-calendar__navigation__label__labelText--from {
    color: #FFF;
  }

  .react-calendar__navigation__arrow, .react-calendar__navigation__next-button {
    color: #FFF;
  }
  
  & * {
    color: #FFF;
    border-radius: 6px;
  }

  & .react-calendar__tile:hover {
    background-color: #2A2A2A;
  }

  .react-calendar__tile--active, .react-calendar__tile--range {
    background-color: #2A2A2A;
  }

  .react-calendar__tile--now { 
    background-color: transparent;
  }

  .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth abbr {
    color: #2A2A2A !important;
  }
`;