import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
		<SimplerComponent handleClick={() => console.log('hello')} />
    <SimpleComponent />
  </div>,
  document.getElementById('root')
);