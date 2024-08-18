import './App.css';
import Home from '../Home';

export default function App() {
  let returnPage : JSX.Element;

  switch (window.location.pathname.slice(1)) {
    case 'home':
      returnPage = <Home />
      break;
    default:
      returnPage = <Home />
      break;
  }

  return returnPage;
}
