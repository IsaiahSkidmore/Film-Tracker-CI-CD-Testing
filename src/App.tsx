import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// I'm only adding this comment to test the git push
function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
