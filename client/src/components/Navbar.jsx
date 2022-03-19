import './Navbar.scss'

const Navbar = () => {
   return ( 
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-3 px-sm-4 px-xl-5 py-5">
         <div className="container-fluid">
            <a className="navbar-brand" href="#">CryptoKot</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pt-4 pt-lg-0" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto me-lg-0 mb-2 mb-lg-0 ms-0 ms-lg-auto ms-0 ms-lg-auto">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Market</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Exchange</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Wallets</a>
                  </li>
               </ul>
               <form className="justify-content-start px-0 ms-lg-2">
                  <button className="btn btn-outline-light me-2" type="button">Log in</button>
                  <button className="btn btn-light" type="button">Sign up</button>
               </form>
            </div>
         </div>
      </nav>
    );
}
 
export default Navbar;