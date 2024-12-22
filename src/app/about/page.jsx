import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md text-center">
        My name is Noor Shaikh, and I am a student in Class 10. I am passionate about learning new technologies, especially web development. I am currently working with Next.js and Tailwind CSS to build responsive and modern websites.
      </p>
      <Link href="/contact" className="text-blue-500 hover:underline">
        Get in touch
      </Link>
    </div>
  )
}

