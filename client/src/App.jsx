import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <div className="app__left col-12 col-lg-7">
        <div className="app__left-wrapper">
          <Navbar />
          <Welcome />
        </div>
      </div>
      <div className="app__right col-12 col-lg-5">
        <Services />
        <Transactions />
        <Footer />
        <Loader />
      </div>
    </div>
  )
}

export default App
