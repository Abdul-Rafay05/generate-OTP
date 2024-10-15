import React, { useState, useRef } from "react";

function App() {
  const [OTP, setOTP] = useState("000000");
  const [ShowPass, setShowPass] = useState(false);
  const otpCopy = useRef(null);

  const HidePassword = () => {
    setShowPass((prev) => !prev);
  };

  const CopyClipboard = () => {
    otpCopy.current?.select();
    otpCopy.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(OTP);

    setTimeout(() => {
      document.getElementById("ShowCopyText").innerHTML = "Copied OTP!  ";
    }, 0);
    setTimeout(() => {
      document.getElementById("ShowCopyText").innerHTML = "";
    }, 1000);

    // clearTimeout(showtext(2000))
  };

  const GenerateOTP = () => {
    let otp = "";
    for (let i = 1; i <= 6; i++) {
      let random = Math.floor(Math.random() * 9);
      otp += random;
    }
    setOTP(otp);
  };
  return (
    <>
      <div className="container min-w-full h-screen bg-red-200 flex justify-center items-center">
        <div className="sub-container p-5 rounded-lg bg-black text-white text-center flex flex-col gap-3 m-2 w-full sm:w-4/12 md:w-4/12">
          <h1 className="text-xl font-bold uppercase">
            THis is a Password Generator
          </h1>
          <div className="input-field flex items-center justify-between gap-2">
            <input
              className="w-full h-[60px] rounded-lg outline-none text-black text-4xl font-bold tracking-[20px] ps-7"
              //   type={setShow((Show) => {
              //     !Show ? "text" : "password";
              //   })}
              type={ShowPass ? "text" : "password"}
              readOnly
              value={OTP}
              ref={otpCopy}
            />
            <div className="cursor-pointer text-3xl">
              <button
                className="bg-white text-black  rounded-lg w-[70px] h-[60px]"
                onClick={HidePassword}
              >
                {/* fa-regular fa-eye-slash */}
                {ShowPass ? (
                  <i className="fa-regular fa-eye"></i>
                ) : (
                  <i className="fa-regular fa-eye-slash"></i>
                )}
              </button>
            </div>
          </div>
          <button
            className="w-full bg-[#1c5cff] p-3 rounded-lg hover:bg-[#335abd] uppercase duration-300 font-bold"
            onClick={GenerateOTP}
          >
            Generate OTP
          </button>
          <button
            onClick={CopyClipboard}
            className="w-full bg-[#1c5cff] p-3 rounded-lg hover:bg-[#335abd] uppercase duration-300 font-bold"
          >
            Copy OTP
          </button>
          <div
            id="ShowCopyText"
            className="text-black mt-2 bg-white m-auto rounded-md "
            style={{ width: "fit-content" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
