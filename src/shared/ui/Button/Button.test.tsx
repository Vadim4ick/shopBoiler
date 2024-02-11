import { fireEvent, render, screen } from "@testing-library/react";

import type { ButtonProps } from "./Button";
import { Button, BUTTON_TEST_IDS } from "./Button";

const buttonProps = {
  children: "button text",
} satisfies ButtonProps;

describe("Button", () => {
  test("should render button", () => {
    render(<Button {...buttonProps} />);
    const button = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toBeInTheDocument();
  });

  test("should handle click event", () => {
    const handleClick = jest.fn();

    render(<Button {...buttonProps} onClick={handleClick} />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    fireEvent.click(container);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should disable click event", () => {
    const handleClick = jest.fn();

    render(<Button {...buttonProps} onClick={handleClick} disabled />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    fireEvent.click(container);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  // Тестирование отображения класса кнопки
  test("should render correct class", () => {
    render(<Button {...buttonProps} className="test-class" />);
    const button = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toHaveClass("test-class");
  });
});
