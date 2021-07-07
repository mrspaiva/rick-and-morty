import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShowData from './pages/ShowData';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/showdata' exact component={ShowData} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes