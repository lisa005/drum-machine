import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [audioName, setName] = useState('Null');

  const drumPads = [
    {
      id: 'Heater-1',
      keyBind: 'Q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'Heater-2',
      keyBind: 'W',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'Heater-3',
      keyBind: 'E',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'Heater-4',
      keyBind: 'A',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Heater-6',
      keyBind: 'S',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'Open-HH',
      keyBind: 'D',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: 'Kick',
      keyBind: 'Z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Kick \'n\' Hat',
      keyBind: 'X',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'Closed-HH',
      keyBind: 'C',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  function playSound(selector, id) {
      const sound = document.getElementById(selector);
      sound.currentTime = 0;
      sound.play();
      setName(id);
  }

  useEffect(() => {
     
    document.addEventListener("keydown", (event) => {
      const keyElement = document.getElementById(event.key.toUpperCase());
      const keyParent = keyElement.parentElement.id;

      playSound(event.key.toUpperCase(), keyParent);
    })
  })

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const keyElement = document.getElementById(event.key.toUpperCase());
      const keyParent = keyElement.parentElement.id;

      playSound(event.key.toUpperCase(), keyParent);
      
      document.getElementById(keyParent).classList.add('keypress');
      
    })

    document.addEventListener("keyup", (event) => {
      const keyElement = document.getElementById(event.key.toUpperCase());
      const keyParent = keyElement.parentElement.id;
      
      document.getElementById(keyParent).classList.remove('keypress');
      
    })
  })

  return(
    <div id="drum-machine">
      <header>
        <h1>DRUM MACHINE</h1>
      </header> 
      <div id="display">
        <h2>Now playing:</h2>
        <div className="audio-name__container">
          <div className="current-audio-name">
            <h3>{audioName}</h3>
          </div>
        </div>
      </div>
      <div className="drum-pad__container">
        {drumPads.map((item) => (
          <div className="drum-pad"
            id={item.id}
            key={item.url}
            onClick={() => {
            playSound(item.keyBind, item.id)
          }}    
          >
          <p>{item.keyBind}</p>
          <audio src={item.url} className="clip" id={item.keyBind} />
          </div>
        ))}
      </div>
    </div>    
  )
}


export default App;
