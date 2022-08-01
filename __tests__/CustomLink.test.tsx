/** @format */

import { screen, render } from "@testing-library/react";
import CustomLink from "../components/CustomLink";

test("render the link label", () => {
  render(<CustomLink label="Github" href="127.0.0.1:3000" />);
  const link = screen.getByText("Github");
  expect(link).toBeInTheDocument();
});
