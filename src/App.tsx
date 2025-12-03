import { Routes, Route } from "react-router";
import { Dashboard } from "@/pages/Dashboard.tsx";
import { Service } from "@/pages/Service.tsx";
import { Order } from "@/pages/Order.tsx";
import { Layout } from "@/ui/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/service" element={<Service />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Layout>
  );
};

export default App;
