import { theme } from '../../providers/theme/theme';

export const createActorsPageStyles = () => ({
  title: {
    fontWeight: 600,
    color: theme.palette.primary.light,
  },
  sectionTitle: {
    fontWeight: 500,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(2),
  },
  bodyText: {
    color: theme.palette.primary.main,
  },
  imgBox: {
    width: '100%',
    height: 'auto',
    borderRadius: 2,
    objectFit: 'cover',
    cursor: 'pointer',
  } as React.CSSProperties,
  containerStyles: {
    bgcolor: 'background.default',
    color: 'text.primary',
    padding: 4,
    borderRadius: 2,
  },
});
