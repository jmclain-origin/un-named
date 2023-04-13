import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const parentClass = scrollPosition > 0 ? "bg-base-300 border-b border-b-accent" : "bg-transparent"
  return (
    <nav className={`navbar fixed top-0 z-10 ${parentClass}`}>
      <div className="container mx-auto flex flex-row">

      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl hover:text-accent">Un-Named</Link>
      </div>
      <div className="flex-none">
        <Link to="/login" className="btn btn-ghost hover:text-accent">Login</Link>
        <Link to="/register" className="btn btn-ghost hover:text-accent">Register</Link>
      </div>
      </div>
    </nav>
  );
}
