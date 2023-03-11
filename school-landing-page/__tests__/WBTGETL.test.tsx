import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WBTGETL from "school-landing-page/pages/WBTGETL";

test("WBTGETL", () => {
    render(<WBTGETL />);
    const img = screen.getByTestId("woman")
    const text = screen.getByText(/Top instructors around the globe/i);
    expect(text).toBeInTheDocument();
    expect(img).toHaveStyle({ transition: "transform 1s ease" })
});
