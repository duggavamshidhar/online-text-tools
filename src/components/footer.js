import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-1">
      <div className="container mx-auto max-w-[1100px]">
        <p className="text-center text-sm">
          <Link className="mr-1 underline-offset-2 hover:underline" href="/">
            Online Text Tools
          </Link>
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
