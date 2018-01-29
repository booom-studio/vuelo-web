import React from 'react';
import Loading from './Loading';

import renderer from 'react-test-renderer';

test('Loading', () => {
  const component = renderer.create(<Loading />);
  expect(component.toJSON()).toMatchSnapshot();
});
