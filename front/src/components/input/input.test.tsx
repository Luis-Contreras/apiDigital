import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./";

test("El componente de entrada se renderiza correctamente", () => {
  // Renderiza el componente de entrada
  const { getByPlaceholderText } = render(<Input placeholder="Escribe algo" />);

  // Verifica que el componente se haya renderizado correctamente
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const inputElement = getByPlaceholderText("Escribe algo");
  expect(inputElement).toBeInTheDocument();
});

test("El componente de entrada maneja el cambio de valor", () => {
  // Renderiza el componente de entrada
  const { getByPlaceholderText } = render(<Input placeholder="Escribe algo" />);

  // Encuentra el elemento de entrada
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const inputElement = getByPlaceholderText("Escribe algo");

  // Simula un evento de cambio en el elemento de entrada
  fireEvent.change(inputElement, { target: { value: "Texto de prueba" } });
});
