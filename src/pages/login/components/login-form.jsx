import styles from "./login-form.module.css";
import Logo from "../../../assets/logo.png";
import FacebookLogo from "../../../assets/facebook-tiny-icon.ico";
import { Link } from "react-router-dom";

import { useState } from "react";

const LoginForm = () => {
  const [userFocus, setUserFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "password") {
      if (e.target.value.length > 0) {
        setPwdFocus(true);
      } else {
        setPwdFocus(false);
      }
    }
    if (e.target.type === "text") {
      if (e.target.value.length > 0) {
        setUserFocus(true);
      } else {
        setUserFocus(false);
      }
    }
  };

  return (
    <form className="" action="">
      <div className="flex flex-col items-center py-3 mb-3 bg-white border-[1px] border-solid border-slate-300">
        <div>
          <img className="mx-0 mt-9 mb-3" src={Logo} alt="" />
        </div>
        <div className="w-full mt-7">
          <div className="mx-10 mb-2 flex">
            <label className="relative flex w-full h-[36px]" htmlFor="">
              <span
                className={`${
                  userFocus
                    ? "scale-[.83] -translate-y-2 ease-out duration-200 left-[-22px] "
                    : "scale-100 -translate-x-0 ease-out duration-200"
                } absolute overflow-hidden pointer-events-none text-sm h-full leading-[36px] origin-left  left-[8px] text-[12px]`}
              >
                Telefone, nome de usuário ou email
              </span>
              <input
                className={`${
                  userFocus ? "pb-[0] text-[12px]" : "pb-[8px]"
                } bg-[#FAFAFA] border-solid border-[1px] border-slate-300 rounded-sm outline-none w-full px-2 pt-2`}
                type="text"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mx-10 mb-2 flex">
            <label className="relative flex w-full h-[36px]" htmlFor="">
              <span
                className={`${
                  pwdFocus
                    ? "scale-[.83] -translate-y-2 ease-out duration-200 left-[-22px] "
                    : "scale-100 -translate-x-0 ease-out duration-200"
                } absolute overflow-hidden pointer-events-none text-sm h-full leading-[36px] origin-left  left-[8px] text-[12px]`}
              >
                Senha
              </span>
              <input
                className={`${
                  pwdFocus ? "pb-[0] text-[12px]" : "pb-[8px]"
                } bg-[#FAFAFA] border-solid border-[1px] border-slate-300 rounded-sm outline-none w-full px-2 pt-2`}
                type="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mx-10 mb-2 mt-4">
            <button
              disabled
              className="disabled:bg-sky-200 bg-sky-600 text-white w-full py-1 rounded-[4px]"
            >
              Entrar
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row my-3 mx-10">
            <div className="relative h-[1px] bg-slate-300 flex-grow flex-shrink top-3" />
            <div className="flex-grow-0 mx-4 text-sm">OU</div>
            <div className="relative h-[1px] bg-slate-300 flex-grow flex-shrink top-3" />
          </div>
        </div>
        <Link className="flex items-center mx-10 my-2" to={""}>
          <img className="h-4 w-4 mr-2" src={FacebookLogo} alt="" />
          <span className="text-blue-900 text-sm font-semibold">
            {" "}
            Entrar com o Facebook
          </span>
        </Link>
        <Link className="mt-3" to={""}>
          <p className="text-sm">Esqueceu a senha?</p>
        </Link>
      </div>
      <div className=" py-5 bg-white border-[1px] border-solid border-slate-300">
        <p>
          Não tem uma conta?{" "}
          <span className="text-sky-500 font-medium"><Link to={''}>Cadastre-se</Link></span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
