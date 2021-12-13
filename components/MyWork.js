import React from "react";

const MyWork = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });

    var uxProjects = data.uxProjects.map(function (projects) {
      var projectImage = "images/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="font-alata py-20" id="portfolio">
      <div className="mx-4">
        <div>
          <h1 className="text-center text-black text-3xl mb-12">
            Web Developer Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 portfolio-wrapper">
            {projects}
          </div>
        </div>
      </div>
      <div className="mx-4 mt-32">
        <div>
          <h1 className="text-center text-black text-3xl mb-12">
            UX Design Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 portfolio-wrapper">
            {uxProjects}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
