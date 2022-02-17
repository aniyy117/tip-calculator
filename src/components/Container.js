import React, { useState } from "react";
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

  const [amount, setAmount] = useState(0);
  const [custom, setCustom] = useState(0);

  const handleOnChnageValue = (value, type) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "amount":
        setAmount(value);
        break;
      case "custom":
        setCustom(value / 100);
        break;
      case "people":
        console.log(value);
        break;
    }
  };
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
              <input
                type="number"
                placeholder="0"
                className="icon"
                step="0.01"
                onChange={(event) =>
                  handleOnChnageValue(event.target.value, "custom")
                }
              />
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
                  <input
                    type="number"
                    placeholder="Custom"
                    className="icons"
                    onChange={(event) =>
                      handleOnChnageValue(event.target.value, "amount")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="fromdiv">
              <label style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
                No. of Peoples
              </label>
              <input
                type="number"
                placeholder="0"
                className="peopicon"
                onChange={(event) =>
                  handleOnChnageValue(event.target.value, "people")
                }
              />
            </div>
          </from>
        </div>
        {/* second div */}
        <div className="resultBody">
          <div>
            <div className="resultdata">
              <div className="resultLable">
                <h3>{"Tip Amount"}</h3>
                <p>{"/person"}</p>
              </div>
              <div>
                <h1>{"$0.00"}</h1>
              </div>
            </div>
            {/* 2nd */}
            <div className="resultdata">
              <div>
                <h3>{"Total"}</h3>
                <p>{"/person"}</p>
              </div>
              <div>
                <h1>{"$0.00"}</h1>
              </div>
            </div>
          </div>
          <div className="resbtnDiv">
            <button className="resetBtn">{"Reset"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
