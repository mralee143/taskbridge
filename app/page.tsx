import { Navbar } from "./component/navbar";
import { Hero } from "./component/hero";
import { Services } from "./component/services";
import { About } from "./component/about";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
