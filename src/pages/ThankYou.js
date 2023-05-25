export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 500);
  return (
    <div className="ThankYou">
      <h1>Thank you!</h1>
      <p>Your order has been received. Our specialists will contact with you shortly to confirm it.</p>
      <img src="https://cdn.pixabay.com/animation/2023/03/19/19/55/19-55-58-835_512.gif" alt="dsds" width={250} />
    </div>
  );
}