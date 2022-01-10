import React from 'react';
export interface LineItemProps {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
    width?: number | string;
}
declare const LineItem: ({ leftContent, rightContent, width, }: LineItemProps) => JSX.Element;
export default LineItem;
