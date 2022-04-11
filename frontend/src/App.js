import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>

     
          <Route path="/product/:id" component={<ProductScreen />} />
          <Route path="/" component={<HomeScreen />} exact />

          </Routes>
        </Container>
      </main>
      <Footer />{" "}
    </Router>
  );
}

export default App;
