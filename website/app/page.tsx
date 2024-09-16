import { HelloLoader } from "@/components/hello-loader"
import { Picture } from "@/components/picture"

const Home: React.FC = () => {
  return (
    <>
      <HelloLoader />
      <Picture />
    </>
  )
}

export default Home
