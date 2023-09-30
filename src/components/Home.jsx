import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  return (
    <div>
      <div className="text-3xl">Home for: {authInfo.name}</div>
    </div>
  );
};

export default Home;
