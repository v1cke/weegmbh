
import SEO from "@components/seo";
import Wrapper from "../layout/wrapper";
import HomeMain from "@components/home";
import HeaderOne from "@layout/header/header-one";
import FooterOne from "@layout/footer/footer-1";
import HeaderTwo from "@layout/header/header-two";
import HeaderThere from "@layout/header/header-two";
import HeaderFour from "@layout/header/header-two";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Weser Ems Eisenbahn'} />
      <HeaderOne headerClass="header__two header__two-space header__transparent menu-sticky" />
      <HomeMain />
      <FooterOne />
    </Wrapper>
  )
}
