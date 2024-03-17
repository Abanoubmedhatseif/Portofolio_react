import "./hero.css";
function Hero() {
  return (
    <div className="container-fluid  my-container d-flex  ps-5">
      <div className="d-flex justify-content-center text-white flex-column">
        <h1>Abanoub medhat</h1>
        <p className="hero-p">Web Developer & Designer</p>
        <button className="btn text-white hero-btn">Contact</button>
      </div>
    </div>
  );
}

export default Hero;
