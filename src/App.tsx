import { Routes, Route } from "react-router";
import { Service } from "@/pages/Service.tsx";
import { Order } from "@/pages/Order.tsx";
import { Layout } from "@/ui/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/" element={<Order />} />
      </Routes>
    </Layout>
  );
};

export default App;
