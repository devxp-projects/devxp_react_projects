import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "school-landing-page/pages/Footer";

test("Footer", () => {
  render(<Footer />);
  const mainBox = screen.getByTestId("mainBox");
  const signupBox = screen.getByTestId("signupBox");
  const emailSignup = screen.getByText(/Subscribe to get latest updates/i);
  expect(emailSignup).toBeInTheDocument();
  expect(signupBox).toHaveStyle({
    position: "relative",
    top: "12.833rem",
    left: "auto",
    right: "auto",
  });
  expect(mainBox).toBeVisible();
});
