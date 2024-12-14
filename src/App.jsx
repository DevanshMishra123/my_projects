import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Data from "./components/Data";
import { datacontext } from "./components/datacontext";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let a = await fetch("http://localhost:3000/");
      const response = await a.json();
      setData(response);
    };
    fetchData();
  }, []);

  const postData = async () => {
    setData([...data, formData]);
    const a = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await a.text();
    console.log(response);
    setFormData({
      urllink: "",
      username: "",
      password: "",
    });
  };

  const updateChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setFormData] = useState({
    urllink: "",
    username: "",
    password: "",
  });

  return (
    <>
      <div className="bg-green-200 min-h-screen">
        <datacontext.Provider value={{data,setData,setFormData,postData}}>
          <Navbar />
          <div className="w-[60vw] m-auto flex flex-col">
            <div className="text-center mt-12 mb-3">
              <h1 className="text-2xl">
                Pass<span className="text-green-500">OP</span>
              </h1>
              <h3>This is your own password manager</h3>
            </div>
            <input
              className="rounded-full p-1 border border-green-500 mb-3"
              type="text"
              name="urllink"
              value={formData.urllink}
              onChange={updateChange}
              placeholder="Enter website URL"
            />
            <div className="grid grid-flow-col grid-cols-[4fr_1fr] gap-4 mt-3">
              <input
                className="rounded-full p-1 border border-green-500"
                type="text"
                name="username"
                value={formData.username}
                onChange={updateChange}
                placeholder="Enter username"
              />
              <input
                className="rounded-full p-1 border border-green-500"
                type="password"
                name="password"
                value={formData.password}
                onChange={updateChange}
                placeholder="Enter password"
              />
            </div>
          </div>
          <button
            onClick={postData}
            className="m-auto block p-2 rounded-full my-6 w-28 bg-green-500 border border-black"
          >
            <FontAwesomeIcon className="mr-3" icon={faSave} />
            Save
          </button>
          {data.length === 0 ? (
            <div className="w-[60vw] m-auto">
              <h1 className="text-lg font-bold">Your Passwords</h1>
              <h3>No passwords to show</h3>
            </div>
          ) : (
            <div className="w-[60vw] m-auto">
              <div className="bg-green-900 grid grid-flow-col grid-cols-[2fr_3fr] text-white pl-2 pr-2">
                <h1>Site</h1>
                <div className="grid grid-flow-col grid-cols-[1fr_1fr_1fr]">
                  <h1>Username</h1>
                  <h1>Password</h1>
                  <h1>Actions</h1>
                </div>
              </div>
              {data.map((item, index) => (
                <Data key={index} item={item} />
              ))}
            </div>
          )}
          <Footer />
        </datacontext.Provider>
      </div>
    </>
  );
}

export default App;
