import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('test button click',()=>{
  render(<App lang="Python"/>);
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  // fireEvent.click(screen.getByText('Click here'));
  
  userEvent.click(screen.getByText('Click here'))

  //screen.getByRole('button').toHaveTextContent('Click here')

  //screen.getByTestId('test-id')

  expect(alertMock).toHaveBeenCalledTimes(1);
  expect(alertMock).toBeCalledWith("Python displayed");
});

// test('test sending content through props', ()=> {
// 	render(<App lang="JS"/>);

// 	//by role
// 	//expect(screen.getByRole('heading')).toHaveTextContent('JS is fav');
	
// 	//by test id
// 	expect(screen.getByTestId('my_test_id')).toHaveTextContent('JS is fav');
// });

test('test the onChange of input',()=>{
  render(<App lang = "JS" />);
  const input = screen.getByLabelText("user-name");
  const greeting = screen.getByTestId("change-input-name");

  expect(input.value).toBe("");
  expect(greeting.textContent).toBe("Welcome, User!")

  //fireEvent.change(input, { target: { value: "Mayank" }});

  userEvent.type(input, "Mayank");
  //await userEvent.click()
  expect(input.value).toBe("Mayank");
  expect(greeting.textContent).toBe("Welcome, Mayank!");
})


