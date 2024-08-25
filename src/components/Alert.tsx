import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";
import "../styles/Alert.css";

type AlertProps = {
  show: boolean;
  close: () => void;
  title: string;
  text: string;
};

export default function Alert({ show, close, title, text }: AlertProps) {
  return (
    <>
      {show ? (
        <section className="alert">
          <div className="alert-content">
            <CheckIcon width={35} height={35} className="check" />

            <div className="message">
              <span className="text text-1">{title}</span>
              <span className="text text-2">{text}</span>
            </div>
          </div>
          <CloseIcon
            width={20}
            height={20}
            className="close__alert"
            onClick={() => close()}
          />
          <div className="progress active"></div>
        </section>
      ) : null}
    </>
  );
}
