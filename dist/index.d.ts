/// <reference types="react" />
import React$1 from 'react';
import { BoxProps as BoxProps$1 } from '@mui/material/Box';
import { CardProps as CardProps$1 } from '@mui/material/Card';
import { CardHeaderProps as CardHeaderProps$1 } from '@mui/material/CardHeader';
import { CardContentProps as CardContentProps$1 } from '@mui/material/CardContent';
import { TypographyProps as TypographyProps$1 } from '@mui/material/Typography';
import { ImageListItemProps } from '@mui/material/ImageListItem';
import { ImageListProps } from '@mui/material/ImageList';
import * as _mui_material_styles from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

declare type BoxProps = {
    children: React$1.ReactNode;
} & BoxProps$1;
declare const Box: ({ children, ...props }: BoxProps) => JSX.Element;

interface CardColorProperty {
    border?: Color;
    bg?: Color;
}
interface CardProps extends CardProps$1, CardColorProperty {
}
declare const Card: ({ border, children, bg, sx, ...props }: CardProps) => JSX.Element;

interface CardHeaderProps extends CardHeaderProps$1, CardColorProperty {
    bottomDivider?: boolean;
}
declare const CardHeader: ({ bottomDivider, children, bg, ...props }: CardHeaderProps) => JSX.Element;

interface CardContentProps extends CardContentProps$1, CardColorProperty {
}
declare const CardContent: ({ children, bg, ...props }: CardContentProps) => JSX.Element;

declare type FontWeightVariant = 'regular' | 'medium' | 'semibold';
interface TypographyProps extends TypographyProps$1 {
    weight?: FontWeightVariant;
    color?: Color;
}
declare const Typography: ({ weight, color, ...props }: TypographyProps) => JSX.Element;

interface LineItemProps {
    leftContent: React$1.ReactNode;
    rightContent: React$1.ReactNode;
    width?: number | string;
}
declare const LineItem: ({ leftContent, rightContent, width, }: LineItemProps) => JSX.Element;

interface InformationCardProps {
    title: string;
    children: React.ReactNode;
}
declare const InformationCard: ({ title, children }: InformationCardProps) => JSX.Element;

interface ImageItem {
    src: string;
    alt: string;
}
interface ImageGridItemProps extends ImageListItemProps {
    src: ImageItem['src'];
    alt: ImageItem['alt'];
    action?: React.ReactNode;
}
declare const ImageGridItem: ({ src, alt, action, ...props }: ImageGridItemProps) => JSX.Element;

interface ImageGridProps extends ImageListProps {
}
declare const ImageGrid: ({ children, ...props }: ImageGridProps) => JSX.Element;

declare const colors: Record<Color, string | undefined>;

declare module '@mui/material/styles' {
    interface TypographyVariants {
        p1: React.CSSProperties;
        p2: React.CSSProperties;
        p3: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        p1?: React.CSSProperties;
        p2?: React.CSSProperties;
        p3?: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        p1: true;
        p2: true;
        p3: true;
        inherit: false;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface CommonColors extends Record<Color, string> {
    }
}
declare const componentOverrides: ThemeOptions['components'];
declare const themeOptions: ThemeOptions;
declare const _default: _mui_material_styles.Theme;

export { Box, Card, CardContent, CardHeader, ImageGrid, ImageGridItem, InformationCard, LineItem, Typography, colors, componentOverrides, _default as theme, themeOptions };
