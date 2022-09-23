import React from "react";

const Header = ({ user }) => {
  return (
    <header>
      <div>Simple Blog App</div>
      <div id="pic">
        {user && (
          <img src={user.pic} alt="profile pic" height="75px" width="75px" />
        )}
      </div>
    </header>
  );
};

export default Header;
