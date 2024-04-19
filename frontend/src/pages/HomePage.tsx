import { Grid, styled, Typography, Button } from '@mui/joy';

import LocationIcon from '../assets/homepage/location-icon.svg?react';
import { SearchForm } from '../components/SearchForm.tsx';
import {Link} from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Grid container sx={{ flexGrow: 1, maxWidth: '100%' }}>
        <Grid xs={8} sx={{ position: 'relative', padding: '3rem 5rem' }}>
            <Typography level={'h1'} component={'h1'}>
            Pathfinder
          </Typography>
          <MainPageTitleTextContainer>
            Explore hidden treasures and insider tips curated by fellow adventurers.
            <br /> Try it out now and unlock the gateway to extraordinary experiences
            <br /> around the world.
          </MainPageTitleTextContainer>
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

        <Grid container sx={{ flexGrow: 1, maxWidth: '100%', position: "relative" }}>
            <Grid xs={12} sx={{ position: 'relative', padding: '3rem 5rem'}}>
                <Typography level={'h1'} component={'h1'} display={'inline'}>
                    Our Services
                </Typography>
                <ServiceTitleTextContainer>
                    Navigate effortlessly with our Pathfinder app's powerful search function.
                </ServiceTitleTextContainer>
            </Grid>

            <BottomLeftImage src="../assets/homepage/img.png" />

            <Link to={"#"}>
                <Button sx={{borderRadius: 0, borderTopLeftRadius: "30px", height: "6rem", width: "15rem", right: 0, bottom: 0, position: "absolute" }}>
                    Return Home
                </Button>
            </Link>
        </Grid>
    </>
  );
}

/*<ButtonImage src="../assets/homepage/ReturnHome.png"/>*/

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

const MainPageTitleTextContainer = styled('div')`
  font-family: 'Syne', 'sans-serif';
  font-size: 24px;
  margin-top: 20px;
  padding-left: 10px;
  border-left: 5px solid var(--primary);
`;
const ServiceTitleTextContainer = styled('div')`
  font-family: 'Syne', 'sans-serif';
  font-size: 24px;
  position: absolute;
  margin-top: 3rem;
  right: 0;
  padding-left: 10px;
  max-width: 25rem;
  border-left: 5px solid var(--primary);
  display: inline;
`;

const DecorTopRight = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  padding: 70px 65px;
  border-bottom-left-radius: 80px;
  background-color: var(--dark-primary);
`;

const BottomLeftImage = styled('img')`
  bottom: 0;
  left: 0;
  height: 30rem;
`;