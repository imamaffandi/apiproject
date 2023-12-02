import { Suspense } from "react";
import { Navbar, Header, Content, Footer } from "./components";
function App() {
  return (
    <Suspense>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </Suspense>
  );
}

export default App;
