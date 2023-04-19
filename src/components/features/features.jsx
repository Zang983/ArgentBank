import moneyIcon from "../../Assets/icon-money.png"
import chatIcon from "../../Assets/icon-chat.png"
import securityIcon from "../../Assets/icon-security.png"
import Item from "./Item";



export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Item imgSrc={chatIcon} altText="Chat Icon" title="You are our #1 priority">Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.</Item>
            <Item imgSrc={moneyIcon} altText="Money Icon" title="More savings means higher rates">The more you save with us, the higher your interest rate will be!</Item>
            <Item imgSrc={securityIcon} altText="Security Icon" title="Security you can trust">We use top of the line encryption to make sure your data and money
            is always safe.</Item>
        </section>
    );
}

