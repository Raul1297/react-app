import "./Random.css";

export default function Random() {
  return (
    <div className="random">
      <div className="random-container">
        <img
          src="https://picsum.photos/id/111/300/200"
          alt=""
          className="random-img"
        />
        <h1 className="random-title">Mafia</h1>
        <p className="random-description"> A story about Sicilian Mafia</p>
        <a
          href="https://www.britannica.com/topic/Sicilian-Mafia"
          className="random-btn"
        >
          Learn More
        </a>
      </div>
      <div className="random-container">
        <img
          src="https://picsum.photos/id/250/300/200"
          alt=""
          className="random-img"
        />
        <h1 className="random-title">Photograpy</h1>
        <p className="random-description">First photo ever made</p>
        <a
          href="https://science.howstuffworks.com/innovation/inventions/first-photo-ever-taken.htm"
          className="random-btn"
        >
          Learn More
        </a>
      </div>
      <div className="random-container">
        <img
          src="https://picsum.photos/300/200"
          alt=""
          className="random-img"
        />
        <h1 className="random-title">Random</h1>
        <p className="random-description">A random funny story</p>
        <a
          href="https://kathakids.com/tag/funny-stories/"
          className="random-btn"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
