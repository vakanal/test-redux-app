import reducer, { agregar, eliminar } from "./finanzas";

describe("Finanzas Duck", () => {
  describe("Action Creators", () => {
    test("agregar", () => {
      const resultado = agregar(1);

      expect(resultado).toEqual({
        type: "AGREGAR",
        payload: 1,
      });
    });

    test("eliminar", () => {
      const resultado = eliminar(1);

      expect(resultado).toEqual({
        type: "ELIMINAR",
        index: 1,
      });
    });
  });

  describe("Reducer", () => {
    test("agregar", () => {
      const resultado = reducer([1], { type: "AGREGAR", payload: 2 });

      expect(resultado).toEqual([1, 2]);
    });

    test("eliminar", () => {
      const resultado = reducer([1, 2], { type: "ELIMINAR", index: 0 });

      expect(resultado).toEqual([2]);
    });

    test("default", () => {
      const resultado = reducer([1, 2, 3], {});

      expect(resultado).toEqual([1, 2, 3]);
    });
  });
});
