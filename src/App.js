import React from 'react';
import {decorate, observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';

import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
