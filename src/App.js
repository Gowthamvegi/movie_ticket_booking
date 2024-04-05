import './App.css';
import MoviesList from './Component/MoviesList';
import SignUp from './Component/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeSlot from './Component/TimeSlot';
import SeatSlot from './Component/SeatSlot';
import Success from './Component/Success';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={ <SignUp/>}/>
    <Route path='/movies' element={<MoviesList />} />
    <Route path='/timeslot' element={<TimeSlot />} />
    <Route path='/seatslot' element={<SeatSlot />} />
    <Route path='/success' element={<Success />} />
  </Routes>
 
  {/* <MoviesList/>
  <TimeSlot/>
  <SeatSlot/>
  <Success/> */}
  </>
  );
}

export default App;
