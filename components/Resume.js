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
  return (
    <div className="bg-white py-20 px-10 sm:px-0 text-center sm:text-left font-alata overflow-hidden">
      <div className="border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black">Education</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {education}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black">Work</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {work}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-3xl font-medium text-black">Skills</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
        </dl>
      </div>
    </div>
  );
};

export default Resume;

// import React from "react";

// const Resume = ({ data }) => {
//   if (data) {
//     var skillmessage = data.skillmessage;
//     var education = data.education.map(function (education) {
//       return (
//         <div key={education.school}>
//           <h3 className="text-2xl font-semibold">{education.school}</h3>
//           <p className="info text-xl">
//             {education.degree} <span>&bull;</span>
//             <em className="date">{education.graduated}</em>
//           </p>
//           <p>{education.description}</p>
//         </div>
//       );
//     });
//     var work = data.work.map(function (work) {
//       return (
//         <div key={work.company}>
//           <h3 className="text-2xl font-semibold">{work.company}</h3>
//           <p className="info text-xl">
//             {work.title}
//             <span>&bull;</span> <em className="date">{work.years}</em>
//           </p>
//           <p className="text-xl">{work.description}</p>
//         </div>
//       );
//     });
//     var skills = data.skills.map(function (skills) {
//       var className = "bar-expand " + skills.name.toLowerCase();
//       return (
//         <li key={skills.name}>
//           <span style={{ width: skills.level }} className={className}></span>
//           <em>{skills.name}</em>
//         </li>
//       );
//     });
//   }
//   return (
//     <div className="flex flex-col justify-center p-20">
//       <div className="flex w-[500px] sm:w-[600px] lg:w-[700px] gap-4">
//         <div>
//           <h3 className="text-2xl underline">Education</h3>
//         </div>

//         <div>{education}</div>
//       </div>
//       <hr className="my-8" />

//       <div className="grid grid-cols-2 w-[500px] sm:w-[600px] lg:w-[700px] gap-4">
//         <div>
//           <h3 className="text-2xl underline">Work</h3>
//         </div>

//         <div>{work}</div>
//       </div>
//     </div>
//   );
// };

// export default Resume;
