// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
// import { render } from '@testing-library/react';
// import {shallow} from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
  //console.log('true')
  //ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
