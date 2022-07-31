/** @format */

import { screen, render } from "@testing-library/react";
import Spinner from "../components/Spinner";

test("render a message correctly", () => {
  const mockMessage = "Loading...";
  render(<Spinner message={mockMessage} />);
  const msg = screen.getByText(mockMessage);
  expect(msg).toBeInTheDocument();
});
