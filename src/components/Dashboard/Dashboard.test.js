import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashbaord Component", () => {
  test("muestra valor", () => {
    const wrapper = shallow(<Dashboard valor={1000} />);

    expect(wrapper.text().includes("1000")).toBe(true);
  });
});
