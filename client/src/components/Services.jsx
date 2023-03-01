import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faShieldHalved,
   faDragon,
   faChartSimple,
} from '@fortawesome/free-solid-svg-icons'

import './Services.scss'

const Services = () => {
   return (
      <section className='services px-4 px-sm-5 py-5 text-light'>
         <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div className='col'>
               <div className='services-card card h-100 mx-auto'>
                  <div className='services-card-body card-body pt-0'>
                     <div className='services-icon-box mx-auto my-3'>
                        <FontAwesomeIcon
                           className='services-icon'
                           icon={faShieldHalved}
                        />
                     </div>
                     <h5 className='services-card-title card-title text-center'>
                        Secured
                     </h5>
                     <p className='card-text text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A eum excepturi eaque?
                     </p>
                  </div>
               </div>
            </div>
            <div className='col'>
               <div className='services-card card h-100 mx-auto'>
                  <div className='services-card-body card-body pt-0'>
                     <div className='services-icon-box mx-auto my-3'>
                        <FontAwesomeIcon
                           className='services-icon'
                           icon={faDragon}
                        />
                     </div>
                     <h5 className='services-card-title card-title text-center'>
                        Fast
                     </h5>
                     <p className='card-text text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quia, asperiores ratione.
                     </p>
                  </div>
               </div>
            </div>
            <div className='col'>
               <div className='services-card card h-100 mx-auto'>
                  <div className='services-card-body card-body pt-0'>
                     <div className='services-icon-box mx-auto my-3'>
                        <FontAwesomeIcon
                           className='services-icon'
                           icon={faChartSimple}
                        />
                     </div>
                     <h5 className='services-card-title card-title text-center'>
                        Easy
                     </h5>
                     <p className='card-text text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt, sed totam.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Services
