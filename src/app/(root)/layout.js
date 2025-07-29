import { Toaster } from 'sonner'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { Separator } from '@/components/ui/separator'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Separator />
      <main>
        <div className="container mx-auto max-w-[1100px]">{children}</div>
      </main>
      <Separator />
      <Footer />
      <Toaster />
    </>
  )
}
