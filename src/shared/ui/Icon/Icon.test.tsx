import { fireEvent, render, screen } from "@testing-library/react";
import { Icon, IconProps } from "./Icon";
import { CityIcon } from "@/shared/Icons";

const iconProps = {
  children: <CityIcon />,
} satisfies IconProps;

describe("Icon", () => {
  test("should render icon", () => {
    const handleClick = jest.fn();

    render(<Icon {...iconProps} onClick={handleClick} />);
    const icon = screen.getByTestId("city-icon");

    fireEvent.click(icon);

    expect(icon).toBeInTheDocument();
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("should render icon clicable", () => {
    const handleClick = jest.fn();

    render(<Icon {...iconProps} clicable onClick={handleClick} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalled();
  });
});
