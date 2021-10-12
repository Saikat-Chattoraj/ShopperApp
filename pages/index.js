import About from "../components/About"
import Feed from "../components/Feed"
import MenCollection from "../components/MenCollection"
import WomenCollection from "../components/WomenCollection"

const index = () => {
  return (
    <div className="bg-gray-300 rounded-3xl">
      <Feed/>
      <MenCollection/>
      <WomenCollection/>
      <About/>
    </div>
  )
}

export default index

