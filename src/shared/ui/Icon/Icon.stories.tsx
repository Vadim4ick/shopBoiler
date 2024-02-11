import type { Meta, StoryObj } from "@storybook/react";

import { CityIcon } from "@/shared/Icons";

import { Icon } from "./Icon";

const meta = {
  component: Icon,
  title: "UI/Icon",
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    children: <CityIcon />,
  },
};

export const ButtonClickable: Story = {
  args: {
    children: <CityIcon height={32} width={32} />,
    clicable: true,
    onClick: () => {},
  },
};
