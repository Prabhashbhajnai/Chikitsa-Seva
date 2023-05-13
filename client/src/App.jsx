import { Navigate, Route, Routes, redirect } from 'react-router-dom'

// Layout
import HomeLayout from './Layout/Home.Layout';

// pages
import Home from './Pages/Home';
import DiseasePrediction from './Pages/DiseasePrediction';
import OrganDonation from './Pages/OrganDonation';
import Payments from './Pages/Payments';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/DiseasePrediction' element={<DiseasePrediction />}/>
          <Route path='/payments' element={<Payments />}/>
          <Route path='/OrganDonation' element={<OrganDonation/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
