/* This example requires Tailwind CSS v2.0+ */
import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3 className="text-xl font-semibold">{education.school}</h3>
          <p className="info text-lg text-gray-600">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3 className="text-xl font-semibold">{work.company}</h3>
          <p className="info text-lg text-gray-600 mb-4">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="text-xl mb-8 text-gray-700">{work.description}</p>
        </div>
      );
    });
  }

  // if (data) {
  //   var certificates = data.certificates.map(function (certificate) {
  //     return (
  //       <div
  //         className="flex flex-col items-center sm:items-baseline"
  //         key={certificate.title}
  //       >
  //         <img className="w-full" src="/images/zero.png" alt="" />
  //         <h3 className="text-xl font-semibold">{certificate.title}</h3>

  //         <p className="py-2">{certificate.description}</p>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div
      id="resume"
      className="bg-white py-20 px-8 sm:px-0 text-center sm:text-left font-alata overflow-hidden"
    >
      <div className="border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black mb-8 sm:mb-0">
              Education
            </dt>
            <dd className="mt-1 pb-2 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {education}
            </dd>
          </div>

          <hr />

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black mb-8 sm:mb-0">
              Work
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {work}
            </dd>
          </div>

          <hr />

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black mb-8 sm:mb-0">
              Skills
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <h3 className="text-lg">HTML</h3>
              <div className="container">
                <div className="skills html">98%</div>
              </div>

              <h3 className="text-lg">CSS</h3>
              <div className="container">
                <div className="skills css">96%</div>
              </div>

              <h3 className="text-lg">SCSS</h3>
              <div className="container">
                <div className="skills scss">96%</div>
              </div>

              <h3 className="text-lg">ReactJS</h3>
              <div className="container">
                <div className="skills reactjs">95%</div>
              </div>

              <h3 className="text-lg">Git</h3>
              <div className="container">
                <div className="skills git">85%</div>
              </div>

              <h3 className="text-lg">JavaScript</h3>
              <div className="container">
                <div className="skills javascript">90%</div>
              </div>

              <h3 className="text-lg">Web Development</h3>
              <div className="container">
                <div className="skills web-development">95%</div>
              </div>
            </dd>
          </div>
          {/* 
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black mb-8 sm:mb-0">
              Certficates
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {certificates}
            </dd>
          </div> */}
        </dl>
      </div>
    </div>
  );
};

export default Resume;
