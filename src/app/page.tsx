import Image from "next/image";
import myPhoto from "../../public/my_photo.jpg";

export default function Home() {
  return (
    <main className="min-h-screen text-white box-border">
      <section className="max-w-screen-xl flex flex-col justify-between items-center bg-black p-4 mx-auto">
        <section
          id="profile"
          className="flex items-center justify-between w-full md:w-[4/5] gap-4"
        >
          <div>
            <h1 className="text-3xl">Dilip Valiya</h1>
            <h3>UI developer @Thoughtworks | Ex. ZopSmart</h3>
          </div>
          <Image
            src={myPhoto}
            alt="my-photo"
            height={150}
            className="rounded-[50%] aspect-square"
          />
        </section>
        <section className="text-left scroll-margin-top w-full" id="about">
          <h1 className="m-0 pb-1 text-xl">About Me</h1>
          <hr />
          <p className="pt-4">
            Driven and determined software engineer, promoting 3+ years of
            experience in building client applications. Offers strong
            interpersonal and communication skills.
          </p>
        </section>
        <section id="experience" className="w-full scroll-margin-top">
          <h1 className="mt-8 mb-8 text-xl">Work Experience</h1>
          <ol className="relative border-s border-gray-700">
            <li className="mb-10 ms-4 bg-gray-900 p-2">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                April 2023
              </time>
              <h3 className="text-lg font-semibold text-white">
                Senior Software Engineer, ZopSmart
              </h3>
              <p className="mb-4 text-base font-normal text-gray-300">
                Developed a platform from the scratch using Next.js to create
                Cloud provider, clusters, namespaces, services, permission
                management and deployment guideline for users who want to deploy
                new service.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Developed and maintain a website to override the log level for
                the service during run time, and displayed all the services
                using d3 as a network graph using React.js and the d3 library,
                actively working on this.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Using React-Query for fetching, caching, synchronizing, and
                updating server state and context-API to manage global state.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Using Docker, Harness, Rancher, and Kubernetes for creating and
                managing services, deployments, and monitoring the pods of
                services.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Wrote terraform script creating a new Service Principal and
                modifying the existing one inside Azure Portal.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Integrated application with Google Analytics to track user
                behavior.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Secured with Azure-AD, Google login mechanism.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Performed unit testing using Jest, Enzyme, and
                React-testing-library.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Integrate Snyk and Sonar for checking code vulnerability and
                code coverage.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Create a workflow file for automatic deployment using GitHub
                actions.
              </p>
            </li>
            <li className="mb-10 ms-4 bg-gray-900 p-2">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                July 2021
              </time>
              <h3 className="text-lg font-semibold text-white">
                Software Engineer, ZopSmart
              </h3>
              <p className="text-base font-normal text-gray-300">
                Developed an application to manage and track the hiring process
                for multiple organizations from scratch in ReactJS. More than
                25k profiles got added to platform in span of 1.5 year and made
                HRs life super easy.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Used Material UI as a library and programming languages such as
                React.Js, JavaScript, HTML, and CSS.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Secured with Google OAuth2 mechanism.
              </p>
            </li>
            <li className="ms-4 bg-gray-900 p-2">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                January 2021
              </time>
              <h3 className="text-lg font-semibold text-white">
                Software Engineer - Intern, ZopSmart
              </h3>
              <p className="mb-4 text-base font-normal text-gray-300">
                Get started with training in javascript with writing dozens of
                DSA problems in JS along with unit testing with jest.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Implemented Robohash project to fetch robot image and serve on
                UI, Implemented it to display one image and multiple image using
                Promises methods.
              </p>
              <p className="mb-4 text-base font-normal text-gray-300">
                Implement User Authentication page (Login & SignUP) using HTML,
                CSS and JS and followed by React.
              </p>
            </li>
          </ol>
        </section>
        <section id="education" className="w-full scroll-margin-top">
          <h1 className="mt-8 mb-8 text-xl">Education</h1>
          <ol className="relative border-s border-gray-700">
            <li className="ms-4 bg-gray-900 p-2">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                May 2017 - May 2021
              </time>
              <h3 className="text-lg font-semibold text-white">
                BTech, DA-IICT, Gandhinagar
              </h3>
              <p className="mb-4 text-base font-normal text-gray-300">
                Completed BTech in Hons. in ICT with minor in CS from DA-IICT,
                Gandhinagar, with 7.82 CGPA.
              </p>
            </li>
            <li className="ms-4 bg-gray-900 p-2">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                May 2015 - May 2017
              </time>
              <h3 className="text-lg font-semibold text-white">10+2 (HSC)</h3>
              <p className="mb-4 text-base font-normal text-gray-300">
                10+2 with Physics, Chemistry and Maths, 100/100 in Maths,
                96%(99.85 PR), Got 94th ACPC rank across entire Gujarat Board.
              </p>
            </li>
          </ol>
        </section>
      </section>
    </main>
  );
}
