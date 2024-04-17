import Main from "../components/Main/Main";
import Sidenav from "../components/Sidenav/Sidenav";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Sidenav />
      <Main />
    </div>
  );
}
