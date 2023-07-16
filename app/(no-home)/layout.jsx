import { Navbar } from "../components/Navbar";

const NoHomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default NoHomeLayout;
