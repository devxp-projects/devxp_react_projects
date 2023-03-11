import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Reviews from "school-landing-page/pages/Reviews";

test("Reviews", () => {
  render(<Reviews />);
  const rev = screen.getByText(/Elon Musk/i);
  const text = screen.getByText(/Say About Us/i);
  expect(text).toBeInTheDocument();
  expect(rev).toBeInTheDocument();
});
