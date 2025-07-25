export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-1">
      <div className="container mx-auto max-w-[1100px]">
        <p className="text-center text-sm">Online Text Tools &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
