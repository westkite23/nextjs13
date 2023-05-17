import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center ">
        <div className="py-2 text-4xl font-bold">Nextjs13</div>
        <ul className="flex justify-between items-center">
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-800">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-800">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-800">
            <Link href={'/back'}>Back</Link>
          </li>
          <li className="px-4 py-2 text-2xl font-bold hover:text-red-800">
            <Link href={'/project'}>프로젝트</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
