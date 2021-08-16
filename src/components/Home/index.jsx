import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Cerita Rakyat</p>
          <p>Indonesia</p>
        </h1>
        <Link to="KumpulanCerita">
          <button>Kumpulan Cerita Rakyat</button>
        </Link>
        <br></br>
        <Link to="about">
          <button>Penjelasan Cerita Rakyat Indonesia</button>
        </Link>
        <br></br>
        <Link to="about">
          <button>Lembar Siswa</button>
        </Link>
      </div>
      <div className="person">
        {/* <img
          src={`${process.env.PUBLIC_URL}/TreesAndWater.jpg`}
          alt="person picture"
        /> */}
      </div>
    </div>
  );
};

export default Home;
