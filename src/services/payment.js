import LiqPay from "@/services/liqpay";
import generator from "generate-password";

const public_key = "sandbox_i78702606286";
const private_key = "sandbox_s4FSNyEIpXb2eOU076bas7t2q29Z4EWJRJtpor9b";
const liqpay = new LiqPay(public_key, private_key);

const proceed_payment = (amount) => {
  const pass = generator.generate({ length: 10, numbers: true });
  let html = liqpay.cnb_form({
    action: "pay",
    amount: `${amount}`,
    currency: "UAH",
    description: "description text",
    order_id: `${pass}`,
    version: "3",
  });
  let dom = document.createElement("div");
  dom.innerHTML = html;
  let form = dom.getElementsByTagName("form")[0];
  document.body.appendChild(form);
  form.submit();
};

export { proceed_payment };
