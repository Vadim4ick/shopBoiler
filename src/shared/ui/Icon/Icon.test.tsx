import { fireEvent, render, screen } from "@testing-library/react";
import { Icon, IconProps } from "./Icon";
import { CityIcon } from "@/shared/Icons";

const iconProps = {
  children: <CityIcon />,
} satisfies IconProps;

describe("Icon", () => {
  // test("should render icon", () => {
  //   render(<Icon {...iconProps} />);
  //   const button = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
  //   expect(button).toBeInTheDocument();
  // });
  //   test("should handle click event", () => {
  //     const handleClick = jest.fn();
  //     render(<Button {...iconProps} onClick={handleClick} />);
  //     const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
  //     fireEvent.click(container);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //   });
  //   test("should disable click event", () => {
  //     const handleClick = jest.fn();
  //     render(<Button {...buttonProps} onClick={handleClick} disabled />);
  //     const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
  //     fireEvent.click(container);
  //     expect(handleClick).toHaveBeenCalledTimes(0);
  //   });
  //   // Тестирование отображения класса кнопки
  //   test("should render correct class", () => {
  //     render(<Button {...buttonProps} className="test-class" />);
  //     const button = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);
  //     expect(button).toHaveClass("test-class");
  //   });
});
