import getUnits from "../index";
import "@testing-library/jest-dom/extend-expect";

test("Tabs render with correct text", async () => {
  const data = await getUnits();

  expect(data.length).not.toBe(0);
});
