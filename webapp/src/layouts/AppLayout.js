import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <div style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          maxWidth: 500,
          border: "1px solid #ccc",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
