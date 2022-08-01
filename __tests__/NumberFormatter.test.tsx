import { screen, render } from '@testing-library/react';
import NumberFormatter from '../components/NumberFormatter';


test("Render passing number in correct format", () => {
    render(<NumberFormatter number={1234567} />)
    const number = screen.getByText('1.234.567');
    expect(number).toBeInTheDocument();

})