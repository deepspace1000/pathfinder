import { Grid, styled, Typography } from '@mui/joy';
import {Link} from 'react-router-dom'

export function DetailPage() {

    return (
        <>
            <Grid container sx={{ flexGrow: 1, maxWidth: '100%' }}>
                <Grid xs={12} sx={{ position: 'relative', padding: '3rem 5rem', flexWrap:'nowrap'}}>
                    <Typography level={'h1'} component={'h1'} display={'inline'}>
                        Detail
                    </Typography>
                    <TextContainer>
                        Navigate effortlessly with our Pathfinder app's powerful search function.
                    </TextContainer>
                </Grid>

                <BottomImage src="../assets/homepage/img.png" />

                <Link to={"/"}>
                    <ButtonImage src="../assets/homepage/ReturnHome.png"/>
                </Link>
            </Grid>
        </>
    );
}

const ButtonImage = styled('img')`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 4rem;
`;

const BottomImage = styled('img')`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30rem;
`;

/*
const Button = styled('button')`
  position: absolute;
  border: none;
  bottom: 0;
  right: 0;
  appearance: none;
  cursor: pointer;

  &:hover {
    background-color: inherit;
  }
`;
*/

const TextContainer = styled('div')`
  font-family: 'Syne', 'sans-serif';
  font-size: 24px;
  position: absolute;
  margin-top: 3rem;
  right: 0;
  padding-left: 10px;
  box-sizing: border-box;
  max-width: 25rem;
  border-left: 5px solid var(--primary);
  display: inline;
`;
