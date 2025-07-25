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
        <div className="container max-w-[1024px] mx-auto">{children}</div>
      </main>
      <Separator />
      <Footer />
      <Toaster />
    </>
  )
}
