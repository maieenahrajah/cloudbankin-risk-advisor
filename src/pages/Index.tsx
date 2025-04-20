
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// This page redirects to the dashboard
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null;
};

export default Index;
