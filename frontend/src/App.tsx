import { styled } from '@mui/joy';
import { Route, Routes } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/detail'} element={<DetailPage />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;
export default App;
