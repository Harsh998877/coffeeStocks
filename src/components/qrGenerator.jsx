import { QRCodeCanvas } from "qrcode.react";
import "./qrGenerator.css"

const QrCode = (props) => {
  // const [text, setText] = useState("");
  // const qrRef = useRef();

  // const qrCodeEncoder = (e) => {
  //   setUrl(e.target.value);
  // };
  // setText(props.Product)
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={props.CouponCode}
      size={200}
      bgColor={"#ffffff"}
      // level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
    </div>
  );
};

export default QrCode;