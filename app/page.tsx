import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Hero />
      
      
    </div>
  );
}
