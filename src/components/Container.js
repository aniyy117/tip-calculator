import React from "react";
import logo from "../images/logo.svg";
import "./Container.css";

const Container = () => {
  const btnG1 = [
    {
      name: "5 %",
    },
    {
      name: "10%",
    },
    {
      name: "15%",
    },
  ];

  const btnG2 = [
    {
      name: "25%",
    },
    {
      name: "50%",
    },
  ];
  return (
    <div className="container">
      <div className="containerHeader">
        <img src={logo} alt="logo" />
      </div>
      <div className="calc_container">
        <div>
          <from>
            <div className="fromdiv">
              <label style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
                Bill
              </label>
              <input type="number" placeholder="0" className="icon" />
            </div>
            <div className="btngroup">
              <span className="title">{"Select Tip %"}</span>
              <div className="btnsAndInput">
                <div>
                  {btnG1.map((data) => {
                    return <button className="btns">{data.name}</button>;
                  })}
                </div>
                <div className="secondBtns">
                  {btnG2.map((data) => {
                    return <button className="secBtns">{data.name}</button>;
                  })}
                  <input type="number" placeholder="Custom" className="icons" />
                </div>
              </div>
            </div>
            <div className="fromdiv">
              <label style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
                No. of Peoples
              </label>
              <input type="number" placeholder="0" className="peopicon" />
            </div>
          </from>
        </div>
        {/* second div */}
        <div className="resultBody">
          
        </div>
      </div>
    </div>
  );
};

export default Container;
