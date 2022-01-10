import { useState } from 'react';
import {
  Box,
  Dialog,
  ImageListItem as MuiImageItem,
  ImageListItemBar,
} from '@mui/material';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { ImageListItemProps as MuiImageListItemProps } from '@mui/material/ImageListItem';

import Card from '../Card';

export interface ImageItem {
  /**
   * The source string of an image, accepts the same values as the src prop
   * of a the standard HTML img element
   */
  src: string;
  /**
   * A useful description of the image
   */
  alt: string;
}

export interface ImageGridItemProps extends MuiImageListItemProps {
  src: ImageItem['src'];
  alt: ImageItem['alt'];
  action?: React.ReactNode;
}

const sharedStyles = {
  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.4)',
  borderRadius: '8px',
};

const ImageGridItem = ({
  src,
  alt,
  action,
  ...props
}: ImageGridItemProps): JSX.Element => {
  const [showBrokenImage, setShowBrokenImage] = useState(false);
  const [imageEnlarged, setImageEnlarged] = useState(false);

  if (showBrokenImage) {
    return (
      <Card border="basic700" bg="basic500">
        <Box sx={{ px: 8, py: 5, ...sharedStyles }}>
          <BrokenImageOutlinedIcon sx={{ color: 'common.basic700' }} fontSize="large" />
        </Box>
      </Card>
    );
  }

  return (
    <MuiImageItem sx={sharedStyles} {...props}>
      <img
        src={src}
        alt={alt}
        style={{ borderRadius: 8 }}
        onError={() => setShowBrokenImage(true)}
        onClick={() => setImageEnlarged(true)}
      />
      <ImageListItemBar
        sx={{
          background: 'none',
          // this makes the action element more visible when the color is similar to its background
          filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))',
        }}
        position="top"
        actionPosition="right"
        actionIcon={action}
      />
      <Dialog open={imageEnlarged} onClose={() => setImageEnlarged(false)}>
        <img src={src} alt={alt} />
      </Dialog>
    </MuiImageItem>
  );
};

export default ImageGridItem;