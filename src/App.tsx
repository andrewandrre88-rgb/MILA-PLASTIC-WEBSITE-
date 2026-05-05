import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import QualityControlPage from "./pages/QualityControlPage";
import QualityCertificationPage from "./pages/QualityCertificationPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import HistoryPage from "./pages/HistoryPage";
import TeamPage from "./pages/TeamPage";
import CustomInjectionPage from "./pages/CustomInjectionPage";
import RealUseCasesPage from "./pages/RealUseCasesPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import PrecisionMistSprayerPage from "./pages/PrecisionMistSprayerPage";
import PrecisionBottleTriggerPage from "./pages/PrecisionBottleTriggerPage";
import ClipLockLotionPumpPage from "./pages/ClipLockLotionPumpPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quality-control" element={<QualityControlPage />} />
          <Route path="/quality-certification" element={<QualityCertificationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/custom-injection" element={<CustomInjectionPage />} />
          <Route path="/real-use-cases" element={<RealUseCasesPage />} />
          <Route path="/social-media" element={<SocialMediaPage />} />
          <Route path="/precision-mist-sprayer" element={<PrecisionMistSprayerPage />} />
          <Route path="/products/precision-bottle-trigger" element={<PrecisionBottleTriggerPage />} />
          <Route path="/products/clip-lock-lotion-pump" element={<ClipLockLotionPumpPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
