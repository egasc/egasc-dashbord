import React from "react";
import "./sidebar.css";
import dasbordIcon from "../../assets/setting .png";
import logo from "../../assets/EGASC.png";
import { useNavigate,useLocation} from "react-router-dom";
import Logout from "../Editpopup/Logout";
import Popup from "reactjs-popup";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const LeaderClass = location.pathname === "/egasc-dashbord/" ? "nav-active" : "";
  const MembersClass = location.pathname.match(/egasc-dashbord\/Members/) ? "nav-active" : "";
  const GamesClass = location.pathname.match(/egasc-dashbord\/Games/) ? "nav-active" : "";
  const AdminClass = location.pathname.match(/egasc-dashbord\/Admin/) ? "nav-active" : "";
  return (
    <section className="col-lg-3 col-md-4  mx-0 side-bar">
      <nav role="navigation">
        <div id="menuToggle">
          <input className="d-none-sm" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div className="inner-items-parant" id="menu">
            <div className="inner-items">
              <div className="dashbord-head pb-md-5 pb-4">
                <div className="d-flex align-items-center gap-3 title-container">
                  <img className="icon-1" src={dasbordIcon} alt="" />
                  <h2 className="d-title">EGASC</h2>
                </div>
              </div>
              <div className="nav-items">
                <div>
                  <h6 className="nav-item m-0">
                    <i className="fa-solid fa-gauge"></i> Dashboard
                  </h6>
                </div>
              </div>
              <div className={`nav-items ${LeaderClass}`} onClick={() => navigate("/egasc-dashbord/")}>
                <div>
                  <h6 className="nav-item m-0">
                  <i class="fa-solid fa-image"></i> Posts
                  </h6>
                </div>
              </div>
              <div className={`nav-items ${MembersClass}`} onClick={() => navigate("/egasc-dashbord/Members")}>
                <div>
                  <h6 className="nav-item m-0 ">
                    <i className="fa-solid fa-address-card"></i> members
                  </h6>
                </div>
              </div>
              <div className={`nav-items ${GamesClass}`} onClick={() => navigate("/egasc-dashbord/Games")}>
                <div>
                  <h6 className="nav-item m-0">
                    <i className="fa-solid fa-gamepad"></i> Games
                  </h6>
                </div>
              </div>
              <div className={`nav-items ${AdminClass}`} onClick={() => navigate("/egasc-dashbord/Admin")}>
                <div>
                  <h6 className="nav-item m-0">
                    <i className="fa-solid fa-person-circle-plus"></i> Add New
                    Admin
                  </h6>
                </div>
              </div>
              <div className='logout-button' >
                <div>
                  <h6 className="m-0">
                  <Popup
                            trigger={<p>
                              Logout <i class="fa-solid fa-right-from-bracket mx-1"></i> 
                            </p>
                            }
                          >
                            {(close) => (
                              <Logout
                                close={close}
                              />
                            )}
                          </Popup>
                  </h6>
                </div>
              </div>
            </div>         
          </div>
        </div>
        <div className="d-none-sm">
          <img className="logo-sm" src={logo} alt="" />
        </div>
      </nav>
    </section>
  );
}

export default Sidebar;
