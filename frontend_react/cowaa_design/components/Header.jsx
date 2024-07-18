import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="head-container w-full">
        <header className="d-flex w-full align-items-center justify-center ">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span className="fs-4 text"></span>
          </a>
          <select className="form-select lang-select btn btn-outline-light ">
            <option selected>English</option>
            <option
              style={{ height: "50px", width: "50px", margin: "50px" }}
              value="1"
            >
              Hindi
            </option>
            <option value="2">Telugu</option>
            <option value="3">Tamil</option>
          </select>
          <button
            type="button"
            class="btn btn-outline-light login"
            onClick={gotologin}
          >
            Log In
          </button>
        </header>
      </div>
    </>
  );
}
export default Header;
