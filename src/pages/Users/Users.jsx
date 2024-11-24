import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import UserMainBar from "../../components/UserMainBar/UserMainBar";

const Users = () => {
  return (
    <div className="container mx-auto flex mt-4 h-fit">
      <aside className="hidden md:block md:w-1/6 shadow-2xl bg-white flex-grow">
        <LeftSideBar></LeftSideBar>
      </aside>
      <main className="w-5/6 bg-white pt-4 h-fit shadow-xl ml-4">
        <UserMainBar></UserMainBar>
      </main>
    </div>
  );
};

export default Users;