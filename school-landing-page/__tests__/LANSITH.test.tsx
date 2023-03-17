import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LANSITH from "school-landing-page/pages/LANSITH";

test("LANSITH", () => {
  render(<LANSITH />);

  const box = screen.getByTestId("box");
  const text = screen.getByText(/Learn A New Skill In Two Hours/i);

  expect(text).toBeInTheDocument();
  expect(box).toHaveStyle({ scrollSnapType: "x mandatory" });
});
