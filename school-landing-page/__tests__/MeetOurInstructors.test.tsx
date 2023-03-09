import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MeetOurInstructors from "school-landing-page/pages/MeetOurInstructors";

test("Render footer", () => {
  render(<MeetOurInstructors />);
  const btn = screen.getByTestId("btn");
  const title = screen.getByText(/Meet our instructors/i);
  expect(title).toBeInTheDocument();
  expect(btn).toBeVisible();
});
