import Image from "next/image";

export default function Projects() {
  return (
    <main className="min-h-screen text-white box-border">
      <section className="max-w-screen-xl flex flex-col justify-between items-center bg-black p-4 mx-auto">
        <section
          className="text-left scroll-margin-top w-full"
          id="hiring-motion"
        >
          <a href="/projects/#hiring-motion">
            <h1 className="m-0 pb-1 text-xl">1. Hiring Motion</h1>
          </a>
          <Image src="/hiring_motion.png" alt="hm" width={800} height={100} />
          <p className="pt-4">
            {`A one stop solution to simplify the complete hiring process. 
            This application allows to keep track of all applications in their
            various stages, schedule interviews, and capture feedback & roll-out
            offers to candidates. It also provides the capability to define an
            organisation's department & stream structure and offers the scope to 
            publish & maintain positions and vacancies for the created positions in individual teams.`}
          </p>
          <h2 className="mt-4">Contribution:</h2>
          <div className="bullet-points">
            <ul>
              <li>
                Developed an application to manage and track the hiring process
                for multiple organizations from scratch in ReactJS.
              </li>
              <li>
                More than 25k profiles got added to platform in span of 1.5 year
                and made HRs life super easy.
              </li>
              <li>
                Used Material UI as a component library and programming
                languages such as React.Js, JavaScript, HTML, and CSS.
              </li>
              <li>Secured with Google login mechanism.</li>
              <li>Written CI-CD workflow file and Dockerfile.</li>
              <li>Deployed to GCP.</li>
            </ul>
          </div>
        </section>
        <section className="text-left scroll-margin-top w-full" id="kops">
          <a href="/projects/#kops">
            <h1 className="m-0 pb-1 text-xl">2. KOps</h1>
          </a>
          <Image src="/kops.png" alt="hm" width={800} height={100} />
          <p className="pt-4">
            {`Project to manage cloud deployments using UI.`}
          </p>
          <h2 className="mt-4">Contribution:</h2>
          <div className="bullet-points">
            <ul>
              <li>
                Developed an application to create and manage cloud
                accounts(AWS/GCP/Azure), Clusters, Service Groups and services.
              </li>
              <li>Used Material UI as a component library.</li>
              <li>
                Using Next.JS and framework for fast-tracking the development
                process and also helpful in server side rendering
              </li>
              <li>Secured with Google login mechanism.</li>
              <li>Written CI-CD workflow file and Dockerfile.</li>
              <li>Deployed to GCP.</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
