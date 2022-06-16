import { Navbar, Hero, Info, Work, Footer } from './components'
import GlobalStyles from './GlobalStyles'

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Info />
      <Work />
      <Footer />
    </div>
  )
}

export default App
