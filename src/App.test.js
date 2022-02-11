import { mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

describe("App Component", () => {
  test("interactua con nuestro store", () => {
    const prevent = jest.fn();
    const reducer = jest.fn().mockReturnValue({
      finanzas: [{ desc: "lala", cant: 150 }],
    });
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "lolo" } });

    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value: "200" } });

    wrapper.find("form").simulate("submit", { prevenDefault: prevent });

    wrapper.find("button").at(2).simulate("click");

    const [a, ...rest] = reducer.mock.calls;

    expect(rest).toEqual([
      [
        { finanzas: [{ desc: "lala", cant: 150 }] },
        { type: "AGREGAR", payload: { desc: "lolo", cant: 200 } },
      ],
      [
        { finanzas: [{ desc: "lala", cant: 150 }] },
        { type: "ELIMINAR", index: 0 },
      ],
    ]);

    expect(wrapper.text().includes("lala")).toBe(true);

    expect(wrapper.text().includes("Finanzly")).toBe(true);
  });
});
