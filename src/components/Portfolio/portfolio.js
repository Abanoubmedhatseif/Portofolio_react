import "./portfolio.css";

function Portfolio() {
  const fields = [
    {
      id: 1,
      title: "Web Design",
      description: "Experienced web developer.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Expert in designing user interfaces and experiences.",
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "Skilled in building interactive frontend experiences.",
    },
    {
      id: 4,
      title: "Responsive Design",
      description:
        "Proficient in creating designs that adapt to various screen sizes.",
    },
    {
      id: 5,
      title: "Graphic Design",
      description:
        "Capable of creating visually appealing graphics for web applications.",
    },
    {
      id: 6,
      title: "Prototype Design",
      description: "Specialized in creating prototypes for web applications.",
    },
    {
      id: 7,
      title: "User Testing",
      description:
        "Experienced in conducting user testing to improve web designs.",
    },
    {
      id: 8,
      title: "Mobile Design",
      description: "Proficient in designing mobile-friendly web interfaces.",
    },
  ];

  return (
    <>
      <section className="bg-light py-5 py-xl-6">
        <div className="container mb-5 mb-md-6">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-4 display-5">Portfolio</h2>
              <p className="text-secondary mb-4 mb-md-5">
                This is my portofolio.
              </p>
              <hr className="w-50 mx-auto mb-0 text-secondary" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row justify-content-xl-center gy-3 gy-sm-4">
            {fields.map((field) => (
              <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div
                  className="rounded shadow-sm p-3 p-md-4 p-xxl-5"
                  style={{
                    backgroundColor:
                      field.id % 2 === 0 ? "darkGrey" : "lightGrey",
                  }}
                >
                  <h3 className="fw-bold mb-2">{field.title}</h3>
                  <p className="text-secondary fst-italic mb-4">
                    {field.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
