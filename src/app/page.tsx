/** @format */

"use client";

import Image from "next/image";

import logo from "@/assets/images/logo.svg";
import { BiDollar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
export default function Home() {
  const tips = [5, 10, 15, 25, 50];

  const [bill, setBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const tipAmountPerPerson = numberOfPeople > 0 ?
    (bill * ((tipPercentage||0) / 100)) / numberOfPeople : 0;
  
  const totalPerPerson = numberOfPeople > 0 ? bill / numberOfPeople + tipAmountPerPerson : 0;

  function handleReset() {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(0);
  }

  console.log(tipAmountPerPerson , "i am here")

  return (
    <div className=" min-h-screen w-full bg-[hsl(185,41%,84%)] flex justify-center items-center flex-col gap-10 p-5">
      <Image src={logo} alt="logo" />
      {/* main section */}
      <main className="bg-white  p-4 rounded-2xl flex flex-col md:flex-row gap-6 w-full max-w-[700px]">
        {/* left section */}
        <div className="flex flex-col gap-8  md:w-1/2">
          {/* bill */}
          <section className="flex gap-2 flex-col">
            {/* <p>Bill</p> */}
            <Label>Bill</Label>
            <div className="relative flex ">
              <input
                onChange={(e) => setBill(e.target.valueAsNumber)}
                className="text-right h-[32px] w-full bg-[hsl(189,41%,97%)] px-2 outline-strong-cyan rounded font-bold text-dark-cyan "
                type="number"
                value={bill}
                placeholder="Enter total bill amount"
                min="0"
              />
              <BiDollar className="absolute top-2.5 left-1.5 text-light-grayish-cyan text-xs" />
            </div>
          </section>
          {/* select tip */}
          <section className="flex gap-2 flex-col">
            <Label>Selected Tip %</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tips.map((d, i) => (
                <TipButton onClick={() => setTipPercentage(d)} key={i}>
                  {" "}
                  {d} %
                </TipButton>
              ))}

              {/* <TipButton>5%</TipButton> */}
              {/* w-[100px] */}
              <input
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.valueAsNumber)}
                min="0"
                type="number"
                placeholder="Custom"
                className=" block    bg-[hsl(189,41%,97%)] px-2 h-[38px] outline-strong-cyan rounded font-bold text-dark-cyan"
              />
            </div>
          </section>

          {/* number fo people */}
          <section className="flex gap-2 flex-col">
            <Label>Number of People</Label>
            <div className="relative flex ">
              <input
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.valueAsNumber)}
                className="text-right h-[32px] w-full bg-[hsl(189,41%,97%)] px-2 outline-strong-cyan rounded font-bold text-dark-cyan"
                type="number"
                placeholder="Enter number of people"
                min={0}
              />
              <FaUser className="absolute top-2.5 left-1.5 text-light-grayish-cyan text-xs" />
            </div>
          </section>
        </div>

        {/* right section */}
        <div className="bg-dark-cyan flex-col flex md:w-1/2 rounded-xl px-5 pt-8 pb-6  justify-between gap-6">
          {/* top items */}
          <section className="flex flex-col gap-5">
            {/*1st part tip amout */}
            <PersonBill
              label="Tip Amount"
              bill={+tipAmountPerPerson.toFixed(2)}
            />
            <PersonBill label="Total" bill={+totalPerPerson.toFixed(2)} />
          </section>

          {/* button  */}

          <button
            onClick={handleReset}
            className="w-full text-dark-cyan bg-strong-cyan rounded font-bold h-[38px] hover:bg-very-light-grayish-cyan "
          >
            {" "}
            RESET{" "}
          </button>
        </div>
      </main>
      {/* <p className=" text-dark-cyan">hello</p> */}
    </div>
  );
}

function Label(props: React.HtmlHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className="text-xs text-[hsl(186,14%,43%)] font-semibold "
    />
  );
}

function TipButton(props: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className=" bg-dark-cyan text-white font-semibold w-full h-[38px]  rounded hover:bg-very-light-grayish-cyan border hover:text-dark-cyan"
    />
  );
}

type PersonBillType = {
  label: string;
  bill: number;
};

function PersonBill(props: PersonBillType) {
  return (
    <div className="flex justify-between items-center">
      {/* left */}
      <div>
        <p className="text-white">{props.label}</p>
        <p className="text-xs text-grayish-cyan">/ person</p>
      </div>
      {/* right */}
      <p className="font-bold text-4xl text-strong-cyan">${props.bill}</p>
    </div>
  );
}
