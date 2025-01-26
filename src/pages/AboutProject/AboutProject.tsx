import { Box, Grid, Typography, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../../providers/theme/theme';
import { useEffect, useState } from 'react';
import { getGitHubProfileImages } from '../../api/api';

const AboutProjectText = {
  intro:
    "Welcome to our project — a movie discovery platform inspired by the concept of Letterboxd. Here, you can explore movies, actors, and everything related to the world of cinema. Whether you're looking for new releases or revisiting classics, this platform offers something for every movie lover.",
  features:
    'Our project utilizes the TMDB API, providing a wide range of movie information, including cast, genres, ratings, and much more. The interface is simple and user-friendly, allowing you to easily discover and track your favorite films.',
  developers:
    "This project was developed by Margarita and Andrey, two passionate developers who wanted to create a platform where movie enthusiasts could gather and explore content. We're excited to share our work with you and would love to hear your feedback.",
};

const persons = [
  {
    name: 'Margarita',
    link: 'https://github.com/mbrita',
    username: 'mbrita',
  },
  {
    name: 'Andrey',
    link: 'https://github.com/Orobinsk',
    username: 'Orobinsk',
  },
];

interface IPersonProps {
  name: string;
  link: string;
  username: string;
  avatar?: string;
}

export const AboutProject = () => {
  const [profileImages, setProfileImages] = useState<string[]>([]);

  useEffect(() => {
    const usernames = persons.map(({ username }) => username);
    getGitHubProfileImages(usernames)
      .then(setProfileImages)
      .catch((error) => console.error(error.message));
  }, []);

  const Person = ({ name, link, avatar }: IPersonProps) => (
    <Grid item>
      <RouterLink
        to={link}
        target="_blank"
        style={{
          color: '#bf111c',
          fontFamily: 'Inconsolata, serif',
          textDecoration: 'none',
        }}
      >
        <Avatar
          alt={name}
          src={avatar || undefined}
          sx={{ width: 100, height: 100, marginBottom: 1 }}
        />
        <Typography variant="body2">{name}&apos;s GitHub</Typography>
      </RouterLink>
    </Grid>
  );

  const { primary } = theme.palette;

  return (
    <Box p={2}>
      <Typography
        variant="h3"
        sx={{
          fontStyle: 'italic',
          fontFamily: 'Inconsolata, serif',
          color: 'transparent',
          '-webkit-text-stroke': '1px #fff',
          textStroke: '2px #fff',
          textAlign: 'center',
          textShadow:
            '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000',
        }}
      >
        About the Project
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{
          color: primary.main,
          textIndent: 20,
          marginTop: 4,
          fontFamily: '"Audiowide", sans-serif',
        }}
      >
        {AboutProjectText.intro}
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{
          color: primary.main,
          textIndent: 20,
        }}
      >
        {AboutProjectText.features}
      </Typography>

      <Box>
        <Typography
          variant="body1"
          paragraph
          sx={{
            color: primary.main,
            textIndent: 20,
          }}
        >
          {AboutProjectText.developers}
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={2} justifyContent="center">
          {persons.map(({ name, link, username }, index) => (
            <Person
              key={name}
              name={name}
              link={link}
              username={username}
              avatar={profileImages[index] || ''}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
