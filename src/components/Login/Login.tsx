import Image from "next/image";
import Layout from "./Layout";
import React from "react";
import styles from "./Login.module.css";

export default function Login({
  username,
  setUsername,
  password,
  setPassword,
  submitForm,
}: {
  username: string;
  setUsername: (e: string) => void;
  password: string;
  setPassword: (e: string) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Layout title="Login">
      <div className="hidden w-full  md:flex bg-[#F5F8FF] justify-center overflow-clip relative">
        <div className="w-full md:w-1/2 portrait:w-full min-h-screen px-6 overflow-x-hidden">
          <div className="absolute w-[714px] h-[714px] rounded-full bg-[#1D51AB] bottom-[10px] -left-[500px]" />
          <div className="absolute w-[44px] h-[44px] rounded-full bg-[#93DFFF] bottom-[600px] left-[80px]" />
          <Image
            src={'/images/login/login.svg'}
            alt="Login"
            width={600}
            height={200}
            className="absolute bottom-[10px] left-[10px]"
          />
          <Image
            src={'/images/login/login2.svg'}
            alt="Login"
            width={300}
            height={200}
            className="absolute bottom-[210px] right-[100px]"
          />
          <div
            style={{ width: "180px" }}
            className="absolute -bottom-[140px] -right-[100px]"
          >
            <svg
              viewBox="0 0 281 283"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.365452 0.538976L280.913 79.2955L72.4343 282.879L0.365452 0.538976Z"
                fill="#A1D0FB"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <div
            style={{ width: "180px" }}
            className="absolute -bottom-[50px] -right-[20px]"
          >
            <svg
              viewBox="0 0 281 283"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.365452 0.538976L280.913 79.2955L72.4343 282.879L0.365452 0.538976Z"
                fill="#A1D0FB"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <div
            style={{ width: "180px" }}
            className="absolute bottom-[10px] right-[50px]"
          >
            <svg
              viewBox="0 0 281 283"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.365452 0.538976L280.913 79.2955L72.4343 282.879L0.365452 0.538976Z"
                fill="#A1D0FB"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <div
            style={{ width: "251px", height: "352px" }}
            className="absolute  right-[0px]"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 451 352"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.74589 -240.125C6.45305 -275.276 13.6302 -310.131 24.2774 -344.134L374.866 -694.723C408.869 -705.37 443.724 -712.547 478.875 -716.254L2.74589 -240.125ZM167.745 205.888C182.089 219.441 196.998 232.05 212.394 243.717L962.717 -506.606C951.05 -522.002 938.441 -536.911 924.888 -551.255L167.745 205.888ZM321.784 307.7C303.114 299.59 284.812 290.366 266.979 280.027L999.027 -452.021C1009.37 -434.188 1018.59 -415.886 1026.7 -397.216L321.784 307.7ZM388.76 331.619C411.114 337.958 433.8 342.816 456.662 346.194L1065.19 -262.338C1061.82 -285.2 1056.96 -307.886 1050.62 -330.24L388.76 331.619ZM633.215 343.015C603.014 348.597 572.427 351.572 541.814 351.937L1070.94 -177.186C1070.57 -146.573 1067.6 -115.986 1062.01 -85.7853L633.215 343.015ZM768.272 298.852C820.978 273.408 870.379 238.825 914.102 195.102C957.825 151.379 992.408 101.978 1017.85 49.272L768.272 298.852ZM878.045 -595.306L123.694 159.045C110.977 143.803 99.239 128.021 88.4798 111.781L830.781 -630.52C847.021 -619.761 862.803 -608.023 878.045 -595.306ZM55.2624 54.104L773.104 -663.738C754.193 -673.104 734.844 -681.285 715.167 -688.279L30.7207 -3.83255C37.7155 15.8439 45.896 35.193 55.2624 54.104ZM10.8703 -74.8765C5.92028 -98.863 2.62664 -123.123 0.989353 -147.474L571.526 -718.011C595.877 -716.373 620.137 -713.08 644.123 -708.13L10.8703 -74.8765Z"
                fill="#1D51AB"
              />
            </svg>
          </div>
          <div className={` flex justify-center mt-14 text-[#2721CE] text-5xl`}>
            <Image
              src={'/images/login/loginHeading.svg'}
              alt="Login"
              width={400}
              height={200}
              
            />
          </div>
          <form onSubmit={submitForm}>
            <div className={`${styles.loginForm}`}>
              <div className={`text-center`}>
                <span className="font-inter text-[#7A7A7A] font-bold text-[20px]">
                  Vous n’avez pas de compte ?
                </span>
                <span className="font-inter text-primary opacity-70 font-bold ml-3">
                  S’inscrire
                </span>
              </div>

              <div
                className={`${styles.loginRectangle} cursor-pointer flex justify-center items-center md:w-80 lg:w-96 md:py-2 lg:py-3`}
              >
                <span
                  className={`font-inter font-bold sm:text-lg md:text-xl lg:text-[20px]`}
                >
                  Se connecter via SSO
                </span>
              </div>

              <div
                className={`flex items-center justify-center text-[#3f3f3fb0] my-4`}
              >
                <div className={`${styles.line} md:w-32 lg:w-36`} />
                <span
                  className={`${styles.loginInterText} px-2 md:text-lg lg:text-xl`}
                >
                  ou
                </span>
                <div className={`${styles.line} md:w-32 lg:w-36`} />
              </div>

              <div className={``}>
                <div className="md:ml-4 lg:ml-6">
                  <label
                    htmlFor="email"
                    className={`font-inter font-bold opacity-70 text-primary md:text-lg lg:text-xl`}
                  >
                    Email*
                  </label>
                </div>
                <input
                  id="email"
                  className={`${styles.inputRectangle} font-inter font-medium bg-white text-primary
                                                                md:w-80 lg:w-96 sm:text-lg md:text-xl lg:text-xl md:py-2 md:px-3 lg:py-3 lg:px-4`}
                  type={"text"}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className={`${styles.passwordMargin}`}>
                <div className="md:ml-4 lg:ml-6">
                  <label
                    htmlFor="password"
                    className={`font-inter font-bold opacity-70 text-primary md:text-lg lg:text-xl`}
                  >
                    Password*
                  </label>
                </div>
                <input
                  id="password"
                  className={`${styles.inputRectangle} bg-white text-primary
                            md:w-80 lg:w-96 sm:text-lg md:text-xl lg:text-xl md:py-2 md:px-3 lg:py-3 lg:px-4`}
                  type={"password"}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="md:w-80 lg:w-96 md:pl-4 lg:pl-6 mt-2">
                <span
                  className={`font-inter font-bold text-primary opacity-70`}
                >
                  Mot de passe <span className="text-[#7A7A7A]">oublié?</span>
                </span>
              </div>

              <button
                type="submit"
                className={`md:w-72 lg:w-80 bg-primary ${styles.borderRadius} flex justify-center
                                        items-center`}
              >
                <span className={`font-inter font-bold text-white text-xl`}>
                  Se connecter
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
