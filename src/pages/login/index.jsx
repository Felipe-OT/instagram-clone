import AnimatedPhones from "../../components/animated-phones/animated-phones";
import DownloadAppButtons from "../../components/download-app/download-app";
import LoginForm from "./components/login-form";

const LoginPage = () => {
  return (
    <section className="h-screen bg-[#FAFAFA]">
      <div className="container flex flex-row justify-center mx-auto h-full">
        <AnimatedPhones />
        <div className="flex flex-col my-auto w-full max-w-[350px]">
          <LoginForm />
          <div className="flex flex-col mt-6 gap-5">
            <span>Obtenha o aplicativo.</span>
            <div className="flex justify-evenly">
              <DownloadAppButtons store="google" />
              <DownloadAppButtons store="apple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
