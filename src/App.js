import './App.css';

function PrintList({list}){
  return <li>{list}</li>
}

function Print(Lists,heading){
  return (
    <>
    <h1>{heading}</h1>
    <ul>
      {
         Lists.map((ele) =>{
          return< PrintList list = {ele}/>
        })
      }
    </ul>
    </>
  )
}

function App() {
  let heading1 = "Mobile Operating System";
  let heading2 = "Mobile Manufacturers";
  let mobiles = ["Android","Blackberry","iPhone","Windows Phone"];
  let companies = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div>
      {
        Print(mobiles,heading1)
      }
      {
        Print(companies,heading2)
      }
    </div>
  );
}

export default App;
