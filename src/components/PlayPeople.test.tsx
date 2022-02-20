import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PlayPeople } from './PlayPeople';
import { PlayerProps } from '../types';
import { mockedPeople } from '../mocks/mockedPeople';

const mockedProps: PlayerProps = {
  data: mockedPeople,
  setGameState: jest.fn(),
};

test('<PlayPeople /> renders correctly', () => {
  const { container } = render(<PlayPeople {...mockedProps} />);
  expect(container).toMatchSnapshot();

  const element = screen.getByTestId('play-btn-people');
  userEvent.click(element);

  expect(screen.queryAllByTestId('people-card')).toBeTruthy();
});
