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
        <div>
        <strong>Jaka Tarub</strong>
          <Link to="JakaTarub">
          <button>
          <img
          src={`https://1.bp.blogspot.com/-p-UJal6bH24/YRjjKNdZKAI/AAAAAAAAAhE/EhvitOcaDtA-lYMktA6RCOT2xruhQQcbwCLcBGAsYHQ/s150/d1z3dx2-b4c67fd7-20d2-4a49-b5f7-16e8ffd1eb3a.jpg`}
          alt="rawa pening"
        />
          </button>
          </Link>
        </div>
        <div>
        <strong>Timun Mas</strong>
          <Link to="TimunMas">
          <button>
          <img
          src={`https://1.bp.blogspot.com/-Pedaf--ZqNQ/YRjajiMdn8I/AAAAAAAAAgs/oEzWYTkX_YYJgLpKb9FrIwncy8AJLCy4wCLcBGAsYHQ/s150/d1b5vqon7irvwpwlk6fs.png`}
          alt="rawa pening"
        />
          </button>
          </Link>
        </div>
        <div>
        <strong>Malin Kundang</strong>
          <Link to="MalinKundang">
          <button>
          <img
          src={`https://1.bp.blogspot.com/-UdZfVSo-DAM/YRjZ6mpGHhI/AAAAAAAAAgk/UeMc92dv8wMsUzvPz4i9adAGRccmaIneACLcBGAsYHQ/s150/malin-kundang.jpg`}
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
