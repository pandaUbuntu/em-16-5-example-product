import { blogCards } from "../../fixtures/cardData"
import BlogShortCard from "../../features/BlogShortCard"
import PageLayout from "../PageLayout"

function HomePage() {


  return (
    <PageLayout>
      <div className="card-wrapper">
        {
          blogCards.map((card, index) => {
              return <BlogShortCard key={index} {...card}/>
          })
        }
      </div>
    </PageLayout>
  )
}

export default HomePage
