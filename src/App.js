import myimg from './girl read.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

       <h1 className="title-red">Nour Jardak</h1>
       <img src={myimg} />
      <img src="/girl reading.jpg" />
     </div>
     <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" />
     </video>
    </div>
  );
}

export default App;
