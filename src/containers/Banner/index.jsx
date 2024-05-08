import Banneritem from "../../components/Banneritem";
import chat from "../../assets/icon-chat.webp";
import money from "../../assets/icon-money.webp";
import security from "../../assets/icon-security.webp";
import "./style.css";

function Banner() {
  return (
    <section className="feature">
      <Banneritem
        imageUrl={chat}
        description={"logo-chat"}
        title={"You are our #1 priority"}
        text={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />
      <Banneritem
        imageUrl={money}
        description={"logo-money"}
        title={"More savings means higher rates"}
        text={
          "The more you save with us, the higher your interest rate will be!"
        }
      />
      <Banneritem
        imageUrl={security}
        description={"logo-security"}
        title={"Security you can trust"}
        text={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
      />
    </section>
  );
}

export default Banner;
