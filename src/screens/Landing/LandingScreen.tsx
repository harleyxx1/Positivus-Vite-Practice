import Container from "../../components/Container"
import NavBar from "../../components/NavBar"
import CaseStudy from "./components/CaseStudy"
import CompanyList from "./components/CompanyList"
import Featured from "./components/Featured"
import MakeHappen from "./components/MakeHappen"
import Services from "./components/Services"
import WorkingProcess from "./components/WorkingProcess"

/**
 * A custom landing screen where all user will see when first time
 * opening our web app.
 * 
 * @type {Screen}
 * @returns {React.FC}
 */
const LandingScreen = () => {
  return (
    <Container>
      <NavBar />
      <Featured />
      <CompanyList />
      <Services />
      <MakeHappen />
      <CaseStudy />
      <WorkingProcess />
    </Container>
  )
}

export default LandingScreen