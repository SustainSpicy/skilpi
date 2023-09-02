import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sidebar({ activeTab, onTabClick, tabs }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-[250px] bg-white px-4">
      <p className="mb-5 text-indigo-950 text-3xl font-semibold leading-[45px]">
        Dashboard
      </p>
      <ul className="flex flex-col">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`mb-4  px-6 py-2 cursor-pointer justify-start items-center gap-4 inline-flex ${
              activeTab === tab.url
                ? "bg-gray-800 text-white px-6 py-4  rounded-2xl shadow "
                : ""
            }`}
            onClick={() => onTabClick(tab.url)}
          >
            <img src={tab.icon} className=" relative" />
            <span className="  text-lg font-normal">{tab.id}</span>
          </li>
        ))}
        <li
          className={`mb-4  px-6 py-2 cursor-pointer justify-start items-center gap-4 inline-flex `}
          onClick={() => {
            dispatch({ type: "SIGN_OUT_USER", payload: {} });
            navigate("/sign-in");
          }}
        >
          <img src={"/SignOut.png"} className=" relative" />
          <span className="  text-lg font-normal">Sign-Out</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
