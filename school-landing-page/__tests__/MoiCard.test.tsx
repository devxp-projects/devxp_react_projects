import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoiCard from "school-landing-page/pages/MoiCard";

test("MoiCard", () => {
  render(
    <MoiCard
      source={"SeniorDeveloper.png"}
      sourceBig={"SeniorDeveloperBG.jpeg"}
      name={"John Mark"}
      role={"Senior Developer"}
      quote={" “Education will be for you what you want it to be” "}
    />
  );
  const btn = screen.getByTestId("bigPic");
  const pic = screen.getByText(
    /“Education will be for you what you want it to be”/i
  );
  expect(pic).toBeInTheDocument();
  expect(btn).not.toBeVisible();
});
