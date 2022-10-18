import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container d-flex justify-content-between">
          <a href="#">Start Bootstrap</a>
          <ul className="d-flex mt-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
      <section className="mt-2 d-flex justify-content-center align-items-center flex-column homesection">
        <img
          className="rounded-circle"
          src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
        ></img>
        <h1>Full Width Pics</h1>
        <p>Landing Page Template</p>
      </section>
      <section className="container text-center mt-5 mb-5">
        <h1>Full Width Backgrounds</h1>
        <p className="lead">
          A single, lightweight helper class allows you to add engaging, full
          width background images to sections of your page.
        </p>
        <p>
          The universe is almost 14 billion years old, and, wow! Life had no
          problem starting here on Earth! I think it would be inexcusably
          egocentric of us to suggest that we're alone in the universe.
        </p>
      </section>
      <section>
        <div class="bg-image-full rasm"></div>
      </section>
      <section className="container text-center mt-5 mb-5">
        <h1>Full Width Backgrounds</h1>
        <p className="lead">
          A single, lightweight helper class allows you to add engaging, full
          width background images to sections of your page.
        </p>
        <p>
          The universe is almost 14 billion years old, and, wow! Life had no
          problem starting here on Earth! I think it would be inexcusably
          egocentric of us to suggest that we're alone in the universe.
        </p>
      </section>
      <footer>
        <p className="lead bg-secondary text-center pt-5 py-5">Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
