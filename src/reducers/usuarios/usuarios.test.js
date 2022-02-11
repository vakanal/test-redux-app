import { fetchUsuarios } from "./usuarios";

describe("Duck Usuarios", () => {
  describe("fetchUsuarios", () => {
    test("maneja el caso de éxito", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const services = {
        axios: {
          get: jest.fn().mockResolvedValue({
            data: 1,
          }),
        },
      };

      await fetchUsuarios()(dispatch, getState, services);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_USUARIOS_START",
        error: false,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_USUARIOS_SUCCESS",
        payload: 1,
      });

      expect(services.axios.get).toHaveBeenCalledTimes(1);

      expect(services.axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/users"
      );
    });

    test("maneja el caso de error", async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      const services = {
        axios: {
          get: jest.fn().mockRejectedValue(1),
        },
      };

      await fetchUsuarios()(dispatch, getState, services);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_USUARIOS_START",
        error: false,
      });

      expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_USUARIOS_ERROR",
        payload: 1,
        error: true,
      });
    });
  });
});
