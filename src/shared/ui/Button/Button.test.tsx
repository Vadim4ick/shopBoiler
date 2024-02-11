import { fireEvent, render, screen } from "@testing-library/react";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const buttonProps = {
  children: "Test",
} satisfies ButtonProps;

describe("Button", () => {
  test("Test render button", () => {
    render(<Button {...buttonProps} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("should handle click event", () => {
    const handleClick = jest.fn();
    render(<Button {...buttonProps} onClick={handleClick} />);
    const container = screen.getByText("Test");
    fireEvent.click(container);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should disable click event", () => {
    const handleClick = jest.fn();
    render(<Button disabled {...buttonProps} />);
    const container = screen.getByText("Test");
    fireEvent.click(container);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  // Тестирование отображения класса кнопки
  test("should render correct class", () => {
    render(<Button className="test-class" {...buttonProps} />);
    expect(screen.getByText("Test")).toHaveClass("test-class");
  });
});
