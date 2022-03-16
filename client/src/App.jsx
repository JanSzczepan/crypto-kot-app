import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components'

import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Services />
      <Transactions />
      <Footer />
      <Loader />
    </div>
  )
}

export default App
