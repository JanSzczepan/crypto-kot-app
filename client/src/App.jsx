import {
   Footer,
   Loader,
   Navbar,
   Services,
   Transactions,
   Welcome,
} from './components'

import './App.scss'

const App = () => {
   return (
      <div className='app'>
         <div className='app__left col-12 col-lg-7 col-xxl-6'>
            <div className='app__left-wrapper'>
               <Navbar />
               <Welcome />
               <Services />
            </div>
         </div>
         <div className='app__right col-12 col-lg-5 col-xxl-6'>
            <div className='app__right-wrapper'>
               <Transactions />
            </div>
         </div>
      </div>
   )
}

export default App
