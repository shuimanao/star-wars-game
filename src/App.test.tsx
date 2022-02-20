import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { App } from './App';

test('<App /> renders correctly', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();

  const element = screen.getByTestId('choose-people-btn');
  userEvent.click(element);

  expect(screen.queryAllByTestId('people-chosen')).toBeTruthy();
});
