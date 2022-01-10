/// <reference types="react" />
import { ComponentMeta, Story } from '@storybook/react';
import { ArgType } from '@storybook/components';
import { CardProps } from './Card';
export declare const argTypes: {
    border: {
        name: string;
        control: {
            type: string;
        };
        defaultValue: string;
        options: string[];
        table: {
            category: string;
            type: {
                summary: string;
            };
        };
    };
    bg: {
        name: string;
        value: string;
        control: string;
        options: string[];
        table: {
            type: {
                summary: string;
            };
            category: string;
        };
    };
    bottomDivider: {
        control: {
            type: string;
        };
        defaultValue: boolean;
        table: {
            category: string;
        };
    };
    header: {
        defaultValue: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
    content: {
        defaultValue: string;
        control: {
            type: string;
        };
        table: {
            category: string;
        };
    };
};
declare type TemplateArgs = {
    header?: ArgType;
    content?: ArgType;
    bottomDivider: ArgType;
} & CardProps;
declare const _default: ComponentMeta<({ border, children, bg, sx, ...props }: CardProps) => JSX.Element>;
export default _default;
export declare const card: Story<TemplateArgs>;
