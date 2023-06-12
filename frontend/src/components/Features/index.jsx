import "./style.scss";

function Feature({ icon, alt, heading, paragraph }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
}
export default function Features() {
  return (
    <section className="features">
      <Feature
        icon="./img/icon-chat.png"
        alt="Chat Icon"
        heading="You are our #1 priority"
        paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        icon="./img/icon-money.png"
        alt="Money Icon"
        heading="More savings means higher rates"
        paragraph="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        icon="./img/icon-security.png"
        alt="Security Icon"
        heading="Security you can trust"
        paragraph="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}
