import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TCBox from "school-landing-page/pages/TCBox";

test("Top Categories", () => {
  render(
    <TCBox
      img={"../src/assets/images/topCategories1.png"}
      title={"Marketing"}
      desc={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u"
      }
    />
  );

  const text = screen.getByText(/Marketing/i);
  const text2 = screen.getByTestId("test");

  expect(text).toBeInTheDocument();
  expect(text2).not.toBeVisible();
});
