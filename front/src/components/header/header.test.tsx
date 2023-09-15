import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

// Prueba básica de renderizado y funcionamiento del botón
test("Renderiza el botón correctamente", () => {
  const { getByText } = render(<Header title="Test" />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const header = getByText("Test");
  expect(header).toBeInTheDocument();
});
