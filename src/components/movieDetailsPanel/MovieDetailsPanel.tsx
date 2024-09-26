import { BorderBottom } from '@mui/icons-material';
import { Box, Button, colors } from '@mui/material';
import { useState } from 'react';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';

const labels = ['cast', 'crew', 'details', 'genres', 'releases'];

export const MovieDetailsPanel = () => {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const handleButtonClick = (label: string) => {
    setActiveLabel(label);
  };

  return (
    <>
      <Box borderBottom="1px solid #9ab" display="flex">
        {labels.map((label, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(label)}
            border="1px solid #11171B"
            sx={{
              color: '#00e054',
              borderRadius: 0,
              color: activeLabel === label ? 'white' : '#00e054',
              '&:hover': { borderBottom: '1px solid #9ab' },
            }}
            disableRipple
          >
            {label}
          </Button>
        ))}
      </Box>
      <Box margin="10px 0">
        {activeLabel === 'cast' && <LabelButton />}{' '}
        {activeLabel === 'crew' && <div>Crew Content</div>}
        {activeLabel === 'details' && <div>Details Content</div>}
        {activeLabel === 'genres' && <div>Genres Content</div>}
        {activeLabel === 'releases' && <div>Releases Content</div>}
      </Box>
    </>
  );
};
