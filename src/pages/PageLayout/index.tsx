import { Children } from "react"
import Footer from "../../shared/components/Footer"
import Header from "../../shared/components/Header"

type PageLayoutProps = {
    children: React.ReactNode
}

function PageLayout(props:PageLayoutProps) {

  return (
    <>
        <Header />
           {
                props.children
           }
        <Footer />
    </>
  )
}

export default PageLayout
