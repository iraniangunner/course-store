import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const BrandColors: Story = {
  render: () => (
    <>
      <Avatar variant="primary" />
      <Avatar variant="secondary" />
      <Avatar variant="accent" />
      <Avatar variant="neutral" />
      <Avatar variant="ghost" />
    </>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <>
      <Avatar variant="neutral" size="tiny" />
      <Avatar variant="neutral" size="small" />
      <Avatar variant="neutral" size="normal" />
      <Avatar variant="neutral" size="large" />
    </>
  ),
};
