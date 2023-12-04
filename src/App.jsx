import { Suspense } from "react";
import { Navbar, Header, Content } from "./components";
function App() {
  return (
    <Suspense>
      <Navbar />
      <Header />
      <Content />
    </Suspense>
  );
}

export default App;
