import styles from "./animated-phones.module.css";
import PhoneImage1 from "../../assets/phone-image1.png";
import PhoneImage2 from "../../assets/phone-image2.png";
import PhoneImage3 from "../../assets/phone-image3.png";
import PhoneImage4 from "../../assets/phone-image4.png";

const AnimatedPhones = () => {

  return (
    <div className="hidden md:block relative bg-[url('./assets/phones-mockup.png')] bg-[length:468px_634px]bg-no-repeat self-center h-[581px] w-full basis-[380px] mr-8 mb-3 bg-[top_left_-46px]">
      <div id={styles.crossfade} className="mt-[27px] ml-[110px] relative flex flex-col">
        <img className={`${styles.img} absolute top-0 left-0 w-[250px]`} src={PhoneImage1} alt="" />
        <img className={`${styles.img} absolute top-0 left-0 w-[250px]`} src={PhoneImage2} alt="" />
        <img className={`${styles.img} absolute top-0 left-0 w-[250px]`} src={PhoneImage3} alt="" />
        <img className={`${styles.img} absolute top-0 left-0 w-[250px]`} src={PhoneImage4} alt="" />
      </div>
    </div>
  );
};
export default AnimatedPhones;
