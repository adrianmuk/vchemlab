import React from 'react';
import ReactDOM from 'react-dom';
import Periodictablepage from './Periodictablepage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Periodictablepage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
