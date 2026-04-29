import Navbar from "../components/client/NavbarClient";
import FloatingLogo from "../components/client/FloatingLogo";
import SearchStore from "../components/client/SearchStore";

export default function Stores() {
  return (
    <>
      <title>Store | O2H Website Center</title>
      <Navbar />
      <div className="flex justify-center px-4 mt-20">
        <SearchStore />
      </div>

      <FloatingLogo />
    </>
  );
}
