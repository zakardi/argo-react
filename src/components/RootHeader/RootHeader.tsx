import React, { useContext } from "react";
import "./RootHeader.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { ProfileDropdown } from "./components";
import { StateContext } from "../../hooks";
import Skeleton from "react-loading-skeleton";
import { IRootHeaderModel } from "./model";

const RootHeader: React.FC<IRootHeaderModel> = ({ parent }) => {
  const { user, userLoading } = useContext(StateContext);
  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);
  return (
    <header className="RootHeader">
      <div className="header-container">
        <div className="navbar-container">
          <div className="logo-container">
            <div className="app-logo-container">
              <Link to="/">
                <img
                  src={require("../../assets/png/logo-white.png")}
                  alt="logo"
                  className="logo-image"
                />
              </Link>
            </div>
          </div>
          <div className="user-profile-container">
            {user ? (
              <>
                <div className="menu-container">
                  <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </div>
                <div
                  className="profile-container"
                  onClick={(e) =>
                    !userLoading ? setShowProfileDropdown(true) : null
                  }
                >
                  {!userLoading ? (
                    <img
                      src={user?.argo_profile.avatar}
                      alt="address-blockie"
                      className={`user-profile-blockie-icon ${
                        showProfileDropdown ? "selected-profile" : ""
                      }`}
                    />
                  ) : (
                    <Skeleton circle={true} height={42} width={42} duration={2} />
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="login-container">Login</div>
                <button type="button" className="primary-button">
                  Signup
                </button>
              </>
            )}
          </div>
          {showProfileDropdown && (
            <ProfileDropdown setShowDropdown={setShowProfileDropdown} />
          )}
        </div>
      </div>
    </header>
  );
};

export default RootHeader;
