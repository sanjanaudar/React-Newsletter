import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Forms from './components/Forms';
import Fail from './components/Fail';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Forms}/>
        <Route path="/success" exact component={Success}/>
        <Route path="/fail" exact component={Fail}/>
        <Route path="/" render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
