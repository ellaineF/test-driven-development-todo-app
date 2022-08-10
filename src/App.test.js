import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './mockData';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.once(JSON.stringify(mockData));
});

describe('<App /> tests', () => {
  it('renders <App />', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });

  // it('should add a todo item', async () => {
  //   fetchMock.once(
  //     JSON.stringify({
  //       userId: 3,
  //       id: Math.floor(Math.random() * 100) + 1,
  //       title: 'Do math homework',
  //       completed: false,
  //     }))

  //   render(<App />);
  //   await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  //   userEvent.type(screen.getByRole('textbox'), 'Do math homework');
  //   userEvent.click(screen.getByText(/Add new todo/i));
  //   await waitForElementToBeRemoved(() => screen.getByText(/saving/i));
  //   expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  //   });
});