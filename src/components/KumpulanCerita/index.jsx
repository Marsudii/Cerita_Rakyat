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
          src={`https://1.bp.blogspot.com/-29-EWJZaf7o/YRtUsZCv4_I/AAAAAAAAAkE/32YzoQre_qIb9yZQgsZiSHYhFxJDZt9sgCLcBGAsYHQ/s150/1.jpg`}
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
