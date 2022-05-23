import { List as MuiList, ListProps as MuiListProps } from '@mui/material';

interface SettingsListProps extends MuiListProps {
  children: React.ReactNode;
}

const SettingsList = ({
  children,
}: SettingsListProps): JSX.Element => (
  <MuiList
    sx={{
      border: 1,
      borderRadius: 8,
      borderColor: 'greyscale.500',
    }}
  >
    {children}
  </MuiList>
);

export default SettingsList;
