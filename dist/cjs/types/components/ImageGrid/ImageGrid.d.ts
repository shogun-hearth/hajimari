import { ImageListProps as MuiImageListProps } from '@mui/material/ImageList';
export interface ImageGridProps extends MuiImageListProps {
}
declare const ImageGrid: ({ children, ...props }: ImageGridProps) => JSX.Element;
export default ImageGrid;
