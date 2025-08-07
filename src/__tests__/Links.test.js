import { render, screen } from "@testing-library/react";

import Links from "../components/Links";



test("renders the h3 with the text 'Links'", () => {
  render(<Links />);
  const heading = screen.getByText("Links");
  expect(heading).toBeInTheDocument();
});
