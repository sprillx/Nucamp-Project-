import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import CampsiteCard   from './features/campsites/CampSiteCard';
import { CAMPSITES } from './app/shared/CAMPSITES';
import{Campsiteslist} from './features/campsites/CampsitesList';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsiteDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { useDispatch  } from 'react-redux';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
//import { fetchComments } from './features/comments/commentsSlice';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    //dispatch(fetchComments());
  }, [dispatch]);

  

  return (
    <div className="App">
    

                  <Header/>
                  <Routes>
                          <Route path='/' element={<HomePage/>}/>
                          <Route path='/%20contact' element={<ContactPage/>} />
                          <Route  path="directory" element={<CampsitesDirectoryPage />}/>
                          <Route path='directory/:campsiteId'  element={<CampsiteDetailPage/>}/>
                          <Route path='/%20about' element={<AboutPage/>} />
                  </Routes> 
              <Footer/>
    </div>
  );
}

export default App;
