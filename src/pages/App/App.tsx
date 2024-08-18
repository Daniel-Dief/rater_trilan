import './App.css';
import Home from '../Home';
import Actor from '../Actor';
import Movie from '../Movie';

export default function App() {
  let returnPage : JSX.Element;

  switch (window.location.pathname.slice(1)) {
    case 'home':
      returnPage = <Home />
      break;
    case 'actor':
      returnPage = <Actor />
      break;
    case 'movie':
      returnPage = <Movie />
      break;
    default:
      returnPage = <Home />
      break;
  }

  return returnPage;
}
