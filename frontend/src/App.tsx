import { Badge, Button } from '@mui/joy';

function App() {
  return (
    <>
      <h1>hello world</h1>
      <Button>Button</Button>
      <Badge style={{ backgroundColor: 'green' }} />
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </>
  );
}

export default App;
