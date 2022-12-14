import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 border-b border-gray-200">
      <Link href="/">
        <a className="text-purple-800 text-lg flex space-x-2">
          EVOLVE
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/course">
              <a className="text-purple-800 hover:underline">Course</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
