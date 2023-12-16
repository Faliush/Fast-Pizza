import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
