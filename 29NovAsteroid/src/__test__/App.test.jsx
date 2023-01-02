import { render, screen } from '@testing-library/react';
import App from '../App';


test('render app component correctly', () => {
  render(<App />);
  expect(screen).toBeTruthy();
});