import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your name"
            required
          />
        </div>
        
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your email"
            required
          />
        </div>
        
        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </form>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

// import Link from 'next/link'

// export default function Contact() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Feel free to reach out via email at <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
//       </p>
//       <Link href="/" className="text-blue-500 hover:underline">
//         Back to Home
//       </Link>
//     </div>
//   )
// }

