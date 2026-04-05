import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { AirMesh } from "./sections/AirMesh";
import { Contact } from "./sections/Contact";
import { Customization } from "./sections/Customization";
import { FeaturedProducts } from "./sections/FeaturedProducts";
import { Hero } from "./sections/Hero";
import { Industries } from "./sections/Industries";
import { Logistics } from "./sections/Logistics";
import { ManufacturingFacility } from "./sections/ManufacturingFacility";
import { ProductRange } from "./sections/ProductRange";
import { ProductionStrength } from "./sections/ProductionStrength";
import { QualityAssurance } from "./sections/QualityAssurance";
import { WhyChooseUs } from "./sections/WhyChooseUs";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ManufacturingFacility />
        <AirMesh />
        <ProductRange />
        <FeaturedProducts />
        <Customization />
        <QualityAssurance />
        <Industries />
        <ProductionStrength />
        <WhyChooseUs />
        <Logistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
