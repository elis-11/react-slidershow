import "./App.css";
import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

function App() {
  const images = [
    // "https://images.unsplash.com/photo-1673913816987-e7b0fb6ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
    // "https://images.unsplash.com/photo-1673809032840-fce74a809f1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8&auto=format&fit=crop&w=610&q=60",
    "https://images.unsplash.com/photo-1673913817074-a1db2c36326c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=610&q=60",
    "https://media.istockphoto.com/id/1290253286/de/foto/nahaufnahme-von-lila-und-gl%C3%A4nzend-goldenen-alkohol-tinte-abstrakte-textur-trendige-tapete.jpg?s=612x612&w=0&k=20&c=41qKQJzeAv19X8U_YS6l6QtnX9I-HKXPJhmdiDJLbZQ=",
    "https://media.istockphoto.com/id/95018381/de/foto/abstrakte.jpg?s=612x612&w=0&k=20&c=mWB_EWFg2_eHur3d8bO9oVm5ecHkVUCt9D8uhKqbx1w=",
    "https://media.istockphoto.com/id/1289105034/de/foto/fluid-ek-goldene-welle-auf-abstrakten-blasenfluss-von-blauer-farbe-marmoreffekt-hintergrund.jpg?s=612x612&w=0&k=20&c=2AS5jrKGXEw1qTVmI3eKcX6Vvz5J8fTocrFPDrgn_6A=",
  ];

  return (
    <Slide>
      {images.map((image, i) => (
        <div key={i} className="slide">
          <div
          // style={{ 'backgroundImage': `url(${images[i]})` }}
          >
            <img src={image} alt={image} />
          </div>
        </div>
      ))}
      {/* <div className="slide">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div> */}
      {/* <div className="slide">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div> */}
      {/* <div className="slide">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div> */}
    </Slide>
  );
}

export default App;
