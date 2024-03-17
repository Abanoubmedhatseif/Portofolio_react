import "./about.css";

function AboutMe() {
  return (
    <div className="container d-flex gap-5 mt-5 mb-5">
      <div className="d-flex justify-content-center align-items-center">
        <p>About me</p>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quis impedit autem, officiis reprehenderit aliquid dolorem eveniet
          voluptatum hic asperiores! Quidem veniam consectetur aliquam, porro
          quasi sed modi cumque vitae?
        </p>
        <button className="btn about-btn">Download Resume</button>
      </div>
    </div>
  );
}

export default AboutMe;
