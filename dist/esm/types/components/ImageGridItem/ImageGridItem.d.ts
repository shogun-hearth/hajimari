/// <reference types="react" />
import { ImageListItemProps as MuiImageListItemProps } from '@mui/material/ImageListItem';
export interface ImageItem {
    src: string;
    alt: string;
}
export interface ImageGridItemProps extends MuiImageListItemProps {
    src: ImageItem['src'];
    alt: ImageItem['alt'];
    action?: React.ReactNode;
}
declare const ImageGridItem: ({ src, alt, action, ...props }: ImageGridItemProps) => JSX.Element;
export default ImageGridItem;
