// Author: Fırat Tekin
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hakkimizda from './components/Hakkimizda';
import Sayfa from './components/Sayfa';
import Araba from './components/Araba';
import Header from './components/Header';
import Users from './components/Users';
// Saruhan Web
import Login from './SaruhanWeb/Views/Login';
import SaruhanWeb from './SaruhanWeb/Views/SaruhanWeb';
import SayfaEkle from './SaruhanWeb/Views/SayfaEkle';
import SayfalariYonet from './SaruhanWeb/Views/SayfalariYonet';

function App() {
  return (
    <div className="App">
        <Routes>

        <Route path="/saruhanweb" element={<Login/>} >
          <Route path="admin" element={<SaruhanWeb/>} >
            <Route path="sayfalari-yonet" element={<SayfalariYonet/>} ></Route>
            <Route path="sayfa-ekle" element={<SayfaEkle/>} ></Route>
          </Route>
        </Route>

        {/* <Route path="/" element={<Header/>} >
            <Route path="hakkimizda" element={<Hakkimizda/>} ></Route>
            <Route path="users" element={<Users/>} ></Route>
            <Route path="*" exact element={<Sayfa/>} ></Route>
            <Route path="araba" exact element={<Araba/>} >
                <Route path="*" exact element={<Araba/>} ></Route>
                <Route path="hakkimizda" element={<Hakkimizda/>} ></Route>
            </Route>
        </Route> */}

        </Routes> 
    </div>
  );
}

export default App;
