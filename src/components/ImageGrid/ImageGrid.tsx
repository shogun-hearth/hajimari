import MuiImageList, { ImageListProps as MuiImageListProps } from '@mui/material/ImageList';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageGridProps extends MuiImageListProps { }

const ImageGrid = ({ children, ...props }: ImageGridProps): JSX.Element => (
  <MuiImageList
    cols={2}
    gap={16}
    {...props}
  >
    {children}
  </MuiImageList>
);

export default ImageGrid;