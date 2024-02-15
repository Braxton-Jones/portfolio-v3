import { client_Portfolio_V3 } from "@/sanity/lib/client"
import Link from "next/link"
async function getProjects() {
    const query = `*[_type == "Project"]`
    const projects = await client_Portfolio_V3.fetch(query)
    return projects
}


export default function Projects() {
    const projectsPromise = getProjects(); // Assuming getProjects() returns a promise

projectsPromise.then(function(projects) {
    // Handle the projects data here
    console.log("Projects:", projects);
}).catch(function(error) {
    // Handle errors if the promise is rejected
    console.error("Error fetching projects:", error);
});

  return (
    <section className="px-1">
                    <h2 className="font-montserrat text-sm font-bold text-white">
                        Projects
                    </h2>
                    <div className="flex flex-row">
                        <div>
                            <h3 className="font-montserrat text-sm font-bold text-white">
                                Radix
                            </h3>
                            <p className="font-inconsolata font-normal tracking-wide text-colorone">
                                A collection of low-level UI primitives to build
                                your own design system.
                            </p>
                            <Link
                                href="#"
                                className="font-inconsolata font-bold text-colorone"
                            >
                                See All
                            </Link>
                        </div>
                    </div>
                </section>
  )
}
