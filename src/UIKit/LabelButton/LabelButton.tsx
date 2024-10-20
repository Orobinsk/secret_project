import { Button } from '@mui/material';
import { FC } from 'react';
import { Theme } from '@mui/material/styles';

interface LabelButtonProps {
  label: string;
  searchProp?: true;
}

export const LabelButton: FC<LabelButtonProps> = ({ label, searchProp }) => {
  const createStyles = (theme: Theme) => ({
    buttonStyles: {
      width: searchProp ? '100%' : 'auto',
      margin: '2px',
      padding: '5px',
      textTransform: 'none',
      color: theme.palette.text.secondary,
      backgroundColor: searchProp ? 'none' : '#283038',
      '&:hover': { bgcolor: '#283038', color: '#41BCF4' },
      '&:active': { bgcolor: '#283038' },
    },
  });

  return <Button sx={createStyles}>{label}</Button>;
};
