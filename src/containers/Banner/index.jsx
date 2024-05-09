import Banneritem from "../../components/Banneritem";
import "./style.css";

function Banner() {
  return (
    <section className="feature">
      <Banneritem
        imageUrl={"../../assets/img/icon-chat.webp"}
        description={"logo-chat"}
        title={"You are our #1 priority"}
        text={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />
      <Banneritem
        imageUrl={"../../assets/img/icon-money.webp"}
        description={"logo-money"}
        title={"More savings means higher rates"}
        text={
          "The more you save with us, the higher your interest rate will be!"
        }
      />
      <Banneritem
        imageUrl={"../../assets/img/icon-security.webp"}
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
