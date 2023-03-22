import "./App.css";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Features from "./component/features/Features";
import Pricing from "./component/Pricing/Pricing";
import Aboutus from "./component/aboutus/Aboutus";
import Contact from "./component/contact/Contact";
import Login from "./component/loginpage/LoginPage";
import Footer from "./component/footer/Footer";
import PriceCardDetails from "./component/PriceCardDetails/PriceCardDetails";
import Signls from "./component/Signals/Signls";
import NewForm from "./component/NewForm/NewForm";
// import Profile from "./component/profile/Profile";
import Register from "./component/register/register";
import Profile from "./component/profile/Profile";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import VerifyPage from "./component/VerifyPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <ParticleCreator/> */}
        <Route exact path="/features" component={Features} />
        <Route exact path="/price" component={Pricing} />
        <Route exact path="/about" component={Aboutus} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/:id" component={Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/card-details/:id" component={PriceCardDetails} />
        <Route exact path="/signals" component={Signls} />
        <Route exact path="/newform" component={NewForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profilepage" component={ProfilePage} />
        <Route exact path="/verify/:id/:token" component={VerifyPage} />

      </Switch>

    </Router>
  );
}

export default App;