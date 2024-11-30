import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';

import { getPerson } from '../../api/api';
import { PERSON_ENDPOINTS } from '../../api/apiTypes/apiPersonTypes';
import { API_PARAMS, imageSizes } from '../../constants';
import { PosterModal } from '../../UIKit/PosterModal/PosterModal';
import { createActorsPageStyles } from './CreateActorsPageStyles';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { IPersonDetailsResults } from '../../types/personTypes';

const PARAMS = [
  PERSON_ENDPOINTS.IMAGES,
  PERSON_ENDPOINTS.MOVIE_CREDITS,
  PERSON_ENDPOINTS.TV_CREDITS,
].join(',');
const styles = createActorsPageStyles();

export const ActorsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [actor, setActor] = useState<IPersonDetailsResults | null>(null);
  const imageConfig = useContext(ImageConfig);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const idNumber = Number(id);
    getPerson({
      id: idNumber,
      params: { [API_PARAMS.APPEND]: PARAMS },
    }).then((data) => {
      setActor(data);
    });
  }, [id]);

  const ActorImage = () => {
    const profiles = actor?.images?.profiles || [];

    return (
      <>
        <img
          src={`${imageConfig.images.secure_base_url}${imageSizes.high}${actor?.profile_path}`}
          alt={actor?.name}
          style={styles.imgBox}
          onClick={handleClickOpen}
        />
        {profiles?.length > 0 && (
          <PosterModal open={open} handleClose={handleClose} posters={profiles} />
        )}
      </>
    );
  };

  const ActorInfo = () => (
    <>
      {actor?.name && (
        <Typography variant="h4" sx={styles.title}>
          {actor.name}
        </Typography>
      )}

      {actor?.known_for_department && (
        <>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Career
          </Typography>
          <Typography variant="body2" sx={styles.bodyText}>
            {actor.known_for_department}
          </Typography>
        </>
      )}

      {actor?.birthday && (
        <>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Date of Birth
          </Typography>
          <Typography variant="body2" sx={styles.bodyText}>
            {`${actor.birthday} (${new Date().getFullYear() - new Date(actor.birthday).getFullYear()} years)`}
          </Typography>
        </>
      )}

      {actor?.place_of_birth && (
        <>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Place of Birth
          </Typography>
          <Typography variant="body2" sx={styles.bodyText}>
            {actor.place_of_birth}
          </Typography>
        </>
      )}

      {actor?.movie_credits?.cast && (
        <>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Total Movies
          </Typography>
          <Typography variant="body2" sx={styles.bodyText}>
            {actor.movie_credits.cast.length}
          </Typography>
        </>
      )}

      {actor?.biography && (
        <>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Biography
          </Typography>
          <Typography variant="body2" sx={styles.bodyText} paragraph>
            {actor.biography}
          </Typography>
        </>
      )}
    </>
  );

  return (
    <Container sx={styles.containerStyles} data-testid="actors-page">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ActorImage />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ActorInfo />
        </Grid>
      </Grid>
    </Container>
  );
};
