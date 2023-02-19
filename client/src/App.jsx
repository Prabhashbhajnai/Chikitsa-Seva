import { Route, Routes } from 'react-router-dom'

// Layout
import HomeLayout from './Layout/Home.Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
      </Routes>
    </>
  );
}

export default App;