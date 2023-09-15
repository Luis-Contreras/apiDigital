import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./";

// Prueba básica de renderizado y funcionamiento del botón
test("Renderiza el botón correctamente", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock}>Boton</Button>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const button = getByText("Boton");
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();

  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

// Prueba cuando el botón está deshabilitado
test('El botón está deshabilitado cuando se pasa la prop "disabled"', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button onClick={onClickMock} disabled>
      Botón deshabilitado
    </Button>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const button = getByText("Botón deshabilitado");
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});
