import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "school-landing-page/pages/Footer";

test("Render footer", () => {
  render(<Footer />);
  const mainBox = screen.getByTestId("mainBox");
  const signupBox = screen.getByTestId("signupBox");
  const emailSignup = screen.getByText(/Subscribe to get latest updates/i);
  expect(emailSignup).toBeInTheDocument();
  expect(signupBox).toHaveStyle({
    position: "relative",
    top: "238px",
    left: "auto",
    right: "auto",
  });
  expect(mainBox).toBeVisible();
});
