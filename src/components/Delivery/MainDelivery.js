import "./MainDelivery.css";
import Delivery from "../../image/Delivery.png";

export default function MainDelivery() {
  return (
    <div className="Delivery">
      <h1>Delivery of orders Worldwide</h1>
      <p>
        Discover the epitome of convenience with our shoe store website's
        delivery service. We prioritize speed, reliability, and customer
        satisfaction to ensure a seamless experience. From the moment you order,
        our dedicated team swiftly packs your shoes, collaborating with trusted
        partners for secure shipping. Track your package in real-time and choose
        from various delivery options tailored to your needs. Should any
        concerns arise, our support team is ready to assist. Experience
        hassle-free shoe delivery and step into style with confidence today.
      </p>
      <img src={Delivery} alt="Delivery_photo" />
    </div>
  );
}
