import Footer from "../../shared/components/Footer"
import Header from "../../shared/components/Header"
import { blogCards } from "../../fixtures/cardData"
import BlogShortCard from "../../features/BlogShortCard"

function HomePage() {


  return (
    <>
        <Header />
            <div className="card-wrapper">
                {
                  blogCards.map((card, index) => {
                      return <BlogShortCard key={index} {...card}/>
                  })
                }
            </div>
        <Footer />
    </>
  )
}

export default HomePage
