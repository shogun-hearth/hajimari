import {
  ListItem as MuiListItem,
  Divider,
  ListItemText,
  ListItemProps as MuiListItemProps,
} from '@mui/material';

export interface SettingsListItemProps extends MuiListItemProps {
  headerText: string;
  description?: string;
  children?: React.ReactNode;
  isHeader?: boolean,
}

const SettingsListItem = ({
  headerText,
  description,
  children,
  divider = false,
  isHeader,
}: SettingsListItemProps): JSX.Element => (
  <>
    <MuiListItem
      alignItems="flex-start"
      sx={{
        my: 1,
      }}
    >
      <ListItemText
        primary={headerText}
        secondary={description || null}
        primaryTypographyProps={{
          fontWeight: isHeader ? 'medium' : 'regular',
        }}
      />
      {children}
    </MuiListItem>
    {divider &&
      <Divider variant="middle" />
    }
  </>
);

export default SettingsListItem;
