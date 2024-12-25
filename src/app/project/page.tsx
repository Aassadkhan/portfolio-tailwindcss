import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3' },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/image 1.png`}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <Link
                href="https://github.com/Aassadkhan/milestone3dynamicresumebyasadullah"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}