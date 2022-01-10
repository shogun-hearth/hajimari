import Card from '../Card';
import CardHeader from '../CardHeader';
import CardContent from '../CardContent';
import Typography from '../Typography';

export interface InformationCardProps {
  title: string;
  children: React.ReactNode;
}

const InformationCard = ({ title, children }: InformationCardProps): JSX.Element => {

  return (
    <Card>
      <CardHeader>
        <Typography color="basic1100" variant="p2" weight="medium">
          {title}
        </Typography>
      </CardHeader>
      <CardContent
        bg="basic100"
        sx={{
          '&.MuiCardContent-root': {
            padding: '16px 24px 32px',
          }
        }}
      >
        <Typography variant="p2" color="basic900">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InformationCard;