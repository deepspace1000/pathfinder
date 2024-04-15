import { Search } from '@mui/icons-material';
import { Button, Input, Stack, styled, Typography } from '@mui/joy';

export function SearchForm() {
  return (
    <FormContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target);
        }}>
        <Stack spacing={3}>
          <div>
            <Typography
              level={'h2'}
              component={'h2'}
              fontSize={'70px'}
              textAlign={'start'}
              sx={{ color: '#053c51' }}
              endDecorator={
                <Search
                  sx={{
                    color: '#1c9bcb',
                    fontSize: '65px',
                  }}
                />
              }>
              Search now
            </Typography>
            <CustomDivider />
          </div>
          <Input
            startDecorator={
              <Search
                sx={{
                  fontSize: '25px',
                  color: '#053c51',
                }}
              />
            }
            placeholder={'Enter your Country'}
            sx={{
              background: 'rgba(17,90,162,0.45)',
              color: '#053c51',
              padding: '12px 20px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '15px',
            }}
            variant="plain"
            size={'lg'}
          />

          <Button type="submit">Search</Button>
        </Stack>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled('div')`
  width: 100%;
  max-width: 45em;
  padding: 4em 3em;
  border-radius: 50px;
  background-color: rgba(4, 154, 213, 0.07);

  backdrop-filter: blur(55px);

  border: 5px solid #053c51;
`;
const CustomDivider = styled('div')`
  width: 120px;
  height: 5px;
  margin-top: 0;
  background: #053c51;
`;
