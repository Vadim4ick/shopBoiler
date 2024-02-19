import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import React from 'react';

const meta = {
    title: "UI/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalTop: Story  = {
    args: {
       children: "Modal content should appear where",
       open: true,
       onClose: () => {},
   },
};

