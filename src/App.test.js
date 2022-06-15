import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  
  const container = render(<App lang ="JS"/>);
 // console.log(container)
  // expect(container.textContent).toBe("Js is fav");
 expect(screen.getByRole('heading')).toHaveTextContent('Js is fav');


   //const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  //fireEvent.click(screen.getByText('Click here'));
  //expect(screen.getByRole('alert')).toHaveTextContent('Button displayed')
  //expect(alertMock).toHaveBeenCalledTimes(1);

  //expect(alertMock).toBe("Button displayed");

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

//const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test button click',()=>{
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  fireEvent.click(screen.getByText('Click here'));
  expect(screen.getByRole('alert')).toHaveTextContent('Button displayed')
  expect(alertMock).toHaveBeenCalledTimes(1);
});
