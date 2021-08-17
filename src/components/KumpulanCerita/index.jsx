import {Link} from "react-router-dom";
import "./style.css";

const KumpulanCerita = () => {
  return (
    <div className="KumpulanCerita">
      <h1>Kumpulan Cerita Rakyat Indonesia</h1>
      <br></br>
      <br></br>
      <div className="content">
      <div>
        <strong>Rawa Pening</strong>
          <Link to="RawaPening">
          <button>
          <img
          src={`https://1.bp.blogspot.com/-payJafuCLvA/YQ2B_EP0eJI/AAAAAAAAAfM/GB-01v2P-ikmcGSGQR0CQU8mSnT92GBYACLcBGAsYHQ/s150/sm-AMDTFDBK_1572611665%2B%25281%2529.png`}
          alt="rawa pening"
        />
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default KumpulanCerita;
