import { Route, Routes } from 'react-router-dom'

// Layout
import HomeLayout from './Layout/Home.Layout';

// pages
import Home from './Pages/Home';
import DiseasePrediction from './Pages/DiseasePrediction';
import OrganDonation from './Pages/OrganDonation';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/DiseasePrediction' element={<DiseasePrediction />}/>
           <Route path='/OrganDonation' element={<OrganDonation/>}/> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
