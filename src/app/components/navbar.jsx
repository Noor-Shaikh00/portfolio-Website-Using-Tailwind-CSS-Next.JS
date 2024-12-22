import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Noor Shaikh</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

