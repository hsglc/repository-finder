/** @format */

import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByText(/github repository finder/i);

    expect(heading).toBeInTheDocument();
  });
});
