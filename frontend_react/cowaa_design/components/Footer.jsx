import "./Footer.css";
function Footer() {
  return (
    <>
    
        <footer class="d-flex flex-wrap bg justify-content-between align-items-center  border-top">
          <p class="col-md-4 mb-0 " >
            Copyrights © 2024 Coins. All Rights Reserved
          </p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
          
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Terms of Services
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 ">
                Privacy Policy{" "}
              </a>
            </li>
          </ul>
         
        </footer>
      
    </>
  );
}
export default Footer;
