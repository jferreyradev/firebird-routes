import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Productos } from './Pages/Productos'
import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar';
import db from './firebase/firebaseConf';
import { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";

function App() {
  useEffect(() => {

    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "tickets"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      /*
      const datos = await getDocs(collection(db, "tickets"));
      datos.forEach((docs) => {
        console.log(docs)
        console.log(`${docs.id} => ${docs.data()}`);
      });*/
    }
    obtenerDatos();

  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={< Productos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
