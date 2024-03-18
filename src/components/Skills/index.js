import "./skill.css";

function Skills() {
  const SkillList = [
    {
      title: "JavaScript",
      progress: 70,
      description: "Provide description for JavaScript programming language",
    },
    {
      title: "Python",
      progress: 80,
      description: "Provide description for Python programming language",
    },
    {
      title: "Java",
      progress: 65,
      description: "Provide description for Java programming language",
    },
    {
      title: "C++",
      progress: 60,
      description: "Provide description for C++ programming language",
    },
    {
      title: "HTML",
      progress: 85,
      description: "Provide description for HTML programming language",
    },
    {
      title: "CSS",
      progress: 75,
      description: "Provide description for CSS programming language",
    },
    {
      title: "Ruby",
      progress: 55,
      description: "Provide description for Ruby programming language",
    },
    {
      title: "Swift",
      progress: 45,
      description: "Provide description for Swift programming language",
    },
    {
      title: "SQL",
      progress: 70,
      description: "Provide description for SQL programming language",
    },
  ];

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
            {/* Rendering Data from the array */}
            {SkillList.map((skill) => (
              <div className="col-12 col-sm-6 col-xl-5">
                <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                  <h3 className="fw-bold mb-2">{skill.title}</h3>
                  <h3 className="fw-bold mb-2">{skill.progress} %</h3>
                  <p className="text-secondary fst-italic mb-4">
                    {skill.description}
                  </p>
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
