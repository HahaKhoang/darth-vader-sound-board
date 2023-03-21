import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [caption, setCaption] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (drumPads.find((item) => item.text === event.key.toUpperCase())) {
        soundHandler(event.key.toUpperCase());
      }
      return;
    });
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      caption: "Release your anger",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_anger.wav",
    },
    {
      keyCode: 87,
      text: "W",
      caption: "Don't underestimate the force",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_dontunderestimate.wav",
    },
    {
      keyCode: 69,
      text: "E",
      caption: "You have failed me for the last time",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_failedme.wav",
    },
    {
      keyCode: 65,
      text: "A",
      caption: "Give yourself to the dark side",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_giveyourself.wav",
    },
    {
      keyCode: 83,
      text: "S",
      caption: "I find your lack of faith disturbing",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_lackoffaith.wav",
    },
    {
      keyCode: 68,
      text: "D",
      caption: "It is pointless to resist, my son",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_pointless.wav",
    },
    {
      keyCode: 90,
      text: "Z",
      caption: "If you only knew the power of the dark side",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_powerofthedarkside.wav",
    },
    {
      keyCode: 88,
      text: "X",
      caption: "Don't make me destroy you",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_dontmakeme.wav",
    },
    {
      keyCode: 67,
      text: "C",
      caption: "I am your father",
      src: "https://www.mediacollege.com/downloads/sound-effects/star-wars/darthvader/darthvader_yourfather.wav",
    },
  ];

  const soundHandler = (id) => {
    const audio = document.getElementById(id);
    audio.play();

    const letter = drumPads.find((item) => item.text === id);
    const caption = letter.caption;

    setCaption(caption);
    console.log(id, caption);
  };

  return (
    <div id="container">
      <h1>There is no escape</h1>
      <div id="drum-machine">
        <div className="drum-pads">
          <div className="left-controller">
            <div className="left-panel"></div>
            {drumPads.map((item) => (
              <div
                key={item.src}
                onClick={() => {
                  soundHandler(item.text);
                }}
                className={`drum-pad ${item.text}`}
                id={item.src}
              >
                {item.text}
                <audio className="clip" id={item.text} src={item.src}></audio>
              </div>
            ))}
            <div className="right-panel"></div>
          </div>
          <div className="right-controller">
            <div id="display">{caption}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
