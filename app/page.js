import Container from "@/components/Container";
import {
  Header,
  HeroSection,
  Slides,
  WhyChoose,
  CardList,
  HowWork,
  Testimonial,
  ComparePrices,
  FAQS,
  Footer,
} from "../components";
export default function Home() {
  return (
    <div
      id="home"
      className="relative bg-white flex justify-center items-center flex-col overflow-hidden"
    >
      <div className="w-full">
        <Header />
        <main>
          <HeroSection />
          <Slides />
          <WhyChoose />
          <CardList />
          <HowWork />
          <Container>
            <Testimonial />
          </Container>
          <ComparePrices />
          <FAQS />
        </main>
        <Footer />
      </div>
    </div>
  );
}
