import React, { Component } from 'react';
import './App.scss';

import { Spinner } from 'reactstrap';
const loading = () => <Spinner color="secondary" />;
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout.js'));

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Suspense fallback={loading()}>
        <DefaultLayout />
      </React.Suspense>
    );
  }
}

export default App;
