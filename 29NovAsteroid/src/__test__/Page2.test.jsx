import { fireEvent, render, screen } from '@testing-library/react';
import Page2 from '../Pages/Page2';


const mockNavigate = jest.fn();

const mockStateValue = {
  name: 'test1',
  is_potentially_hazardous_asteroid: true,
  nasa_jpl_url: 'https://'
}

jest.mock('react-router-dom', () => {

  return {

    useNavigate: () => mockNavigate,
    useLocation: () => ({
      state: {
        result: mockStateValue
      }
    })
  }
})


describe('Page2 test suit', () => {
  test('render Page2 component correctly', () => {
    render(<Page2 />);
    expect(screen).toBeTruthy();
  });

  test('Check name and potentially hazardous', () => {
    const {getByTestId} = render(<Page2 />);
    const name = getByTestId('name')
    const url = getByTestId('url')
    const hazardous = getByTestId('hazardous')
    
    expect(name.textContent).toBe('Name = '+mockStateValue.name);
    expect(url.textContent).toBe('nasa_jpl_url = '+mockStateValue.nasa_jpl_url);
    expect(hazardous.textContent).toBe(' is_potentially_hazardous_asteroid = '+mockStateValue.is_potentially_hazardous_asteroid.toString());
  });

  test('Click on back button', () => {
    const {getByTestId} = render(<Page2 />);
    const backBtn = getByTestId('backBtn')
    fireEvent.click(backBtn);
    expect(mockNavigate).toBeCalledWith('/', expect.any(Object))
  });

})

