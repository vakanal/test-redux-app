import { shallow } from "enzyme";
import Finanzas from "./Finanzas";

describe("Finanzas Component", () => {
  test("llama a eliminarFinanza onClick", () => {
    const finanzas = [
      {
        desc: "Finanza 1",
        cant: 100,
      },
      {
        desc: "Finanza 2",
        cant: 80,
      },
    ];
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );

    wrapper.find("button").at(0).simulate("click");

    expect(eliminarFinanza).toHaveBeenNthCalledWith(1, 0);

    expect(wrapper.text().includes("Finanza 1")).toBe(true);

    expect(wrapper.text().includes("Finanza 2")).toBe(true);
  });
});
