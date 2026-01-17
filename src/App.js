import { use, useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(0);
  const [noPos, setNoPos]= useState({top:"60%", left:"55%"});

  const moveButton =()=> {
    const x= Math.random()* (window.innerWidth -120);
    const y= Math.random()* (window.innerHeight -120);

    setNoPos({
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  return (
    <div className="container">
      {screen===0 && (
        <div className="screen" onClick={()=> setScreen(1)}>
          <h1>Helloooo Bubuuuu, Let's play a game😘</h1>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b3F4OXc3aDl1YTJiZmdsdWp3MTVwYzZlaTRwZ3FmaWgyZzA0NzhtZSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/f9EmXxglhdhAj1bo28/giphy.gif"
            alt="cute"
            className="cute-gif"
          />
          <p>(Click anywhere)</p>
        </div>
      )}
    

    {screen===1 && (
      <div className="screen">
        <img
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZ6bnF3eWd6dnlpeHBzaGhwZno0a2ViOTB2aGVtMG1ocW43Z2kxOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eKfpB6WZeKC1DiGrj8/giphy.gif"
      alt="Puuung crying"
      className="cute-gif"
    />
        <h1>Are you still mad at me?🥺👉👈</h1>

        <div className="buttons initial">
          <button
            className="yes"
            style={{position: "absolute", top: noPos.top, left: noPos.left}}
            onMouseEnter={moveButton}>Yess😠</button>

            <button className="no" onClick={()=> setScreen(2)}>Noo🥰</button>
        </div>
      </div>
    )}

    {screen === 2 && (
        <div className="screen">
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXdlZ28xbWt4amhmOTM3MG90M3JkbXdicHRlbXM0Y2s4OWNwbmxocyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gjHkRHSuHqu99y9Yjt/giphy.gif"
          className="cute-gif"
          />
          <h1>Do you love me?💖</h1>

          <div className="buttons">
            <button className="yes" onClick={() => setScreen(3)}>
              Yesssss😘😍😍💕
            </button>

            <button
              className="no"
              style={{position: "absolute", top: noPos.top, left: noPos.left}}
              onMouseEnter={moveButton}
            >
              No!!😒🙄😠😤
            </button>
          </div>
        </div>
      )}

      {screen === 3 && (
        <div className="screen">
          <h1>YAYYY 🥰💞</h1>
          <h2>I love youuu soo muchhhh, I hope you like thissss 😭❤️💕</h2>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmZ6bnF3eWd6dnlpeHBzaGhwZno0a2ViOTB2aGVtMG1ocW43Z2kxOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IzXiddo2twMmdmU8Lv/giphy.gif"
            alt="happy"
            className="cute-gif"
          />
          <p> Sorry na baby itna gussi gussi mat ho naa 🥺🥺😭😭</p>
        </div>
      )}
</div>
);
}
export default App;

