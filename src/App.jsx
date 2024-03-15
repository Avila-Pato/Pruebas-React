/* eslint-disable react/jsx-key */


import './App.css'
import Card from './components/Card';
import ShowHide from './components/ShowHide';
import vehicles from './data/vehicles';
function App() {
  const vehicleList = vehicles.map(v => (
    <Card key={v.name} title={v.name} descripcion={v.description} />
  ));
  
  

 return <div className = 'App'> 
   <h1>Texting de pruebas</h1>
   <div className='container'> 
    {vehicleList}
    <ShowHide/>
   </div>
  </div>
   
}

export default App;




{/* <Card title= "Hola" descripcion= "Mundo"/>
   <Card title= "Hola" descripcion= "Mundo"/>
   <Card />
   <Card /> */}