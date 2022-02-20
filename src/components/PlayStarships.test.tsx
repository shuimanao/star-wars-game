import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PlayStarships } from './PlayStarships';
import { PlayerProps } from '../types';
import { mockedStarships } from '../mocks/mockedStarships';

const mockedProps: PlayerProps = {
  data: mockedStarships,
  setGameState: jest.fn(),
};

test('<PlayStarships /> renders correctly', () => {
  const { container } = render(<PlayStarships {...mockedProps} />);
  expect(container).toMatchSnapshot();

  const element = screen.getByTestId('play-btn-starship');
  userEvent.click(element);

  expect(screen.queryAllByTestId('starship-card')).toBeTruthy();
});
