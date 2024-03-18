import "./skill.css";

function Skills() {
  const SkillList = ["javaScript", "java", "python", "nodeJs", "react"];

  return (
    <>
      <section className="bg-light py-5 py-xl-6">
        <div className="container mb-5 mb-md-6">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-4 display-5">Skills</h2>
              <p className="text-secondary mb-4 mb-md-5">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                commodo.
              </p>
              <hr className="w-50 mx-auto mb-0 text-secondary" />
            </div>
          </div>
        </div>
        <div>
          <ul className="row justify-content-xl-center gy-3 gy-sm-4">
            {SkillList.map((skill) => (
              <div className="col-12 col-sm-6 col-xl-5">
                <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                  <h3 className="fw-bold mb-2">{skill}</h3>
                  <p className="text-secondary fst-italic mb-4">
                    Nullam felis turpis, commodo id fermentum eget, semper vel
                    odio.
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar w-85 progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Bootstrap"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      85%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
