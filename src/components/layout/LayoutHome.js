import LoadRoutes from "../../config/loadRoutes";
import Header from "./Header";
import Footer from "./Footer";
export default function LayoutHome(props) {
  const { routes } = props;

  return (
    <div>
      <Header />
      <LoadRoutes routes={routes} />
      <Footer />
    </div>
  );
}
