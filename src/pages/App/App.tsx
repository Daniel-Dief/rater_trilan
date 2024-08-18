import './App.css';
import Home from '../Home';
import Actor from '../Actor';
export default function App() {
  let returnPage : JSX.Element;

  switch (window.location.pathname.slice(1)) {
    case 'home':
      returnPage = <Home />
      break;
    case 'actor':
      returnPage = <Actor />
      break;
    default:
      returnPage = <Home />
      break;
  }

  return returnPage;
}
