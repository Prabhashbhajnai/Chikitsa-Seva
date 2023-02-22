import { Route, Routes } from 'react-router-dom'

// Layout
import HomeLayout from './Layout/Home.Layout';

// pages
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;