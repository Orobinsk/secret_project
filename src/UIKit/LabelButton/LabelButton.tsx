import { Button } from '@mui/material';
import { FC } from 'react';
import { Theme, useTheme } from '@mui/material/styles';

interface LabelButtonProps {
  label: string;
}

const createStyles = (theme: Theme) => ({
  buttonStyles: {
    margin: '2px',
    padding: '5px',
    textTransform: 'none',
    color: theme.palette.text.secondary,
    bgcolor: '#283038',
    '&:hover': { bgcolor: '#283038' },
    '&:active': { bgcolor: '#283038' },
  },
});
export const LabelButton: FC<LabelButtonProps> = ({ label }) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <Button sx={styles.buttonStyles}>{label}</Button>;
};
