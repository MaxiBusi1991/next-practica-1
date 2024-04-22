import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-3'>
      <Link href='/' className='font-bold text-black'>
        Home
      </Link>

      <ul>
        <li>
          <Link href='/about' className='font-bold text-black'>
          About us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar