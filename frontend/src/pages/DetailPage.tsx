import { Grid, Typography } from '@mui/joy';

export function DetailPage() {
  return (
    <>
      <Grid container sx={{ flexGrow: 1, maxWidth: '100%' }}>
        <Grid xs={12} sx={{ position: 'relative', padding: '3rem 5rem', flexWrap: 'nowrap' }}>
          <Typography level={'h1'} component={'h1'} display={'inline'}>
            Detail
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
