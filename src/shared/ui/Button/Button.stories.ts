import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  component: Button,
  title: "UI/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    children: "Button",
  },
};

export const ButtonDisabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};
