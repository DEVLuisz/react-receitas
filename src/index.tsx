import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Ingrediente from './Pages/Ingredientes';
import ReceitasPage from './Pages/ReceitasPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App>
      <Ingrediente />
      <ReceitasPage />
    </App>
  </Router>,
  rootElement
);

