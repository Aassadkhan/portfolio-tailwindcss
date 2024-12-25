import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/image.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6 font-semibold text-2xl">
          Hi, I'm [ Asad Khan ]. I'm a [ Web Developer ] specializing in [ Html,Css,Typescript,Next.js ].
        </p>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}