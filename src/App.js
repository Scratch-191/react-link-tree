
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <User name="Samuel" email ="samuelannan191@gmail.com" uni="UMaT" age={20}/>
    <User name="Tamakloe" email ="tamakperry1@tk.com" uni="KNUST" age={24}/>
    <User name="Justice" email ="justann@gmail.com" uni="Legon" age={32}/> */}
    
    <Job salary ={30008} position= "Manager" company= "AmaliTech"/>
    <Job salary={324224} position ="Supervisor" company= "Amazon"/>
    <Job salary={54364} position ="PR" company= "Newmont"/>

    {age}
    </div>
  );
}


// const User = (props) =>{
//   return(
//    <div>
//     <h1>{props.name}</h1>
//     <h2> {props.email}</h2>
//     <h3> {props.uni}</h3>
//     <h3> {props.age}</h3>
//    </div>
//   );
// }

const Job =(props) => {
return(
  <div>
  <h1>{props.salary} </h1>
  <h2 className='sim'>{props.position} </h2>
  <h3> {props.company} </h3>
  </div>
 );
}

const age= 20;
age>=20? console.log( "Qualified") : console.log("Disqualified")

export default App;
