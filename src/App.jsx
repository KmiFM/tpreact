import TituloPrincipal from "./components/titulo";
import Punto3 from "./components/punto3";
function App(){
  const myfriend= 'Cami';
  
  return (
    <>
    <Punto3>
    <TituloPrincipal myfriend = {myfriend} estado={true}></TituloPrincipal>
    
  )
}
export default App;
