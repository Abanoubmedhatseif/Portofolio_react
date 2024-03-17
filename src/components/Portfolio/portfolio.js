import "./portfolio.css";

function Portfolio() {
  return (
    <>
      <section className="bg-light py-5 py-xl-6">
        <div className="container mb-5 mb-md-6">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-4 display-5">Portfolio</h2>
              <p className="text-secondary mb-4 mb-md-5">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                commodo.
              </p>
              <hr className="w-50 mx-auto mb-0 text-secondary" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row justify-content-xl-center gy-3 gy-sm-4">
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Web Design</h3>
                <p className="text-secondary fst-italic mb-4">
                  Nullam felis turpis, commodo id fermentum eget, semper vel
                  odio.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Problem solving</h3>
                <p className="text-secondary fst-italic mb-4">
                  Nullam felis turpis, commodo id fermentum eget, semper vel
                  odio.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Backend Developer</h3>
                <p className="text-secondary fst-italic mb-4">
                  Nullam felis turpis, commodo id fermentum eget, semper vel
                  odio.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">WordPress</h3>
                <p className="text-secondary fst-italic mb-4">
                  Nullam felis turpis, commodo id fermentum eget, semper vel
                  odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
