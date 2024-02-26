import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <HashLoader
      className="Loader"
      color="#36d7b7"
      style={{ transform: "translate(-50%,-50%)" }}
    />
  );
}
