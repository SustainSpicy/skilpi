import { useState } from "react";
import Accounts from "./Accounts";
import Sidebar from "../components/SIdebar";
import AllPosts from "./AllPosts";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("accounts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "All Posts", url: "all-posts", icon: "/allPost.png" },
    { id: "Accounts", url: "accounts", icon: "/accounts.png" },
  ]; // Add your desired tabs here

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} onTabClick={handleTabClick} tabs={tabs} />
      <div className="flex flex-col flex-grow  bg-[#eff3f4]">
        <div className="w-full h-16 bg-white"></div>
        <section className="p-6">
          {activeTab === "accounts" && <Accounts />}
          {activeTab === "all-posts" && <AllPosts />}
        </section>
      </div>
    </div>
  );
}
export default Dashboard;
