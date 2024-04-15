import { Grid, styled, Typography } from '@mui/joy';

import LocationIcon from '../assets/homepage/location-icon.svg?react';
import { SearchForm } from '../components/SearchForm.tsx';

export function HomePage() {
  return (
    <>
      <Grid container sx={{ flexGrow: 1, maxWidth: '100%' }}>
        <Grid xs={8} sx={{ position: 'relative', padding: '3rem 5rem' }}>
          <Typography level={'h1'} component={'h1'}>
            Pathfinder
          </Typography>
          <TextContainer>
            Explore hidden treasures and insider tips curated by fellow adventurers.
            <br /> Try it out now and unlock the gateway to extraordinary experiences
            <br /> around the world.
          </TextContainer>
        </Grid>
        <Grid xs={4} sx={{ position: 'relative' }}>
          <DecorTopRight>
            <LocationIcon />
          </DecorTopRight>
        </Grid>
      </Grid>
      <Grid container sx={{ flexGrow: 1, padding: '2rem 5rem' }}>
        <Grid xs={6} sx={{ position: 'relative' }}>
          <SearchForm></SearchForm>
        </Grid>

        <Grid position={'relative'} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
          <FrontImage1 src="../assets/homepage/china_scaled.jpg" />
          <FrontImage2 src="../assets/homepage/london_scaled.jpg" />
          <FrontImage3 src="../assets/homepage/america_scaled.jpg" />
        </Grid>
      </Grid>
    </>
  );
}

const FrontImage = styled('img')`
  width: auto;
  height: 25vw;
  aspect-ratio: 1.5 auto;

  position: absolute;
  border-radius: 25px;
  border: 3px solid #053c51;
`;

const FrontImage1 = styled(FrontImage)`
  top: -13em;
  left: 5em;
`;
const FrontImage2 = styled(FrontImage)`
  top: -8em;
  left: 15em;
`;

const FrontImage3 = styled(FrontImage)`
  top: -3em;
  left: 25em;
`;

const TextContainer = styled('div')`
  font-family: 'Syne', 'sans-serif';
  font-size: 24px;
  margin-top: 20px;
  padding-left: 10px;
  border-left: 5px solid var(--primary);
`;

const DecorTopRight = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  padding: 70px 65px;
  border-bottom-left-radius: 80px;
  background-color: var(--dark-primary);
`;
