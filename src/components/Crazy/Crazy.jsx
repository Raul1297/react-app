import "./Crazy.css";

export default function Crazy() {
  return (
    <div className="crazy">
      <div className="crazy-container">
        <img
          src="https://media.istockphoto.com/id/1137244360/photo/adorable-dog-face-in-black-afro-style-wig-bright-party-mood-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=v9iijG8GMZH-bX5UlW4jmD28p0JFs_w6aTAs1v0jg88="
          alt=""
          className="card-img"
        />
        <h1 className="crazy-title">Dogs</h1>
        <p className="crazy-description">
          Crazy and fun things about dogs down below
        </p>
        <a
          href="https://www.pdsa.org.uk/what-we-do/blog/10-amazing-facts-about-dogs"
          className="crazy-btn"
        >
          Learn More
        </a>
      </div>
      <div className="crazy-container">
        <img
          src="https://images.unsplash.com/photo-1464808322410-1a934aab61e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="card-img"
        />
        <h1 className="crazy-title">Water</h1>
        <p className="crazy-description">
          Crazy things about falling down below
        </p>
        <a
          href="https://www.youtube.com/watch?v=LffNHspowH0"
          className="crazy-btn"
        >
          Learn More
        </a>
      </div>
      <div className="crazy-container">
        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="card-img"
        />
        <h1 className="crazy-title">Cats</h1>
        <p className="crazy-description">Crazy things about cats down below</p>
        <a
          href="https://assisianimalhealth.com/blog/cat-facts/"
          className="crazy-btn"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
