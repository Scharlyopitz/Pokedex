import { Link } from "react-router-dom";
import Pokeball from "/pokeball.png";

export default function Error() {
  return (
    <div className="error">
      <div className="error_txt">
        <h1>
          Error 4<img src={Pokeball} alt="" />4
        </h1>
        <p>cette page n'existe pas</p>
      </div>
      <Link className="Back" to="/">
        Retour Menu
      </Link>
    </div>
  );
}
