
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-handsy-light to-white page-transition">
      <div className="glass-card p-12 text-center max-w-md">
        <h1 className="text-6xl font-bold text-handsy-primary mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center btn-primary"
        >
          <Home className="mr-2" size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
