import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopCategories from "school-landing-page/pages/TopCategories";

test("Top Categories", () => {
  render(<TopCategories />);

  const text = screen.getByText(
    /Choose favourite course from top cartegories/i
  );

  expect(text).toBeInTheDocument();
});
