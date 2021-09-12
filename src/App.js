//styling
import styled from "styled-components";

//components
import Header from "./Components/Header";
import Content from "./Components/Content";
import Separator from "./Components/Separator";
import Youtube from "./Components/Youtube";
function App() {
  return (
    <div>
      <Header
        avatarLink="https://bio.fm/cdn/storage/Images/4SKLu3ZjBgwwZhGGe/original/4SKLu3ZjBgwwZhGGe.jpg?size=50"
        name="Lilly Sabri"
        bioFmUsername="lillysabri"
      />
      <Content
        heading="THE LEAN APP IS COMING GUIDE!"
        link="https://mailchi.mp/leanwithlilly/freeworkouttimetable"
        downloadText="SIGN UP NOW FOR FREE GUIDES!"
      />
      <Separator />
      <Youtube
        heading="Over 500 FREE Home Workouts"
        avatarLink="https://yt3.ggpht.com/a/AATXAJwUgI0p1F6EGHqqvErS2Z6ILkfWyPrTf9ZONg=s200-c-k-c0xffffffff-no-rj-mo"
        name="Lilly Sabri"
        description="I’m Lilly Sabri, founder of Lean with Lilly. I’ve been a Chartered.."
      />
      <Separator />
      <Content
        heading="Get my Cookbook!"
        link="https://www.leanwithlilly.com/products/the-anti-inflammatory-cook-book/"
        downloadText="BUY NOW"
      />
      <Separator />
      <Content
        heading="SHOP GYMSHARK using my link!"
        link="https://uk.gymshark.com/collections/new-releases/womens?utm_source=ACA&utm_medium=3728830_Lilly+Sabri&utm_campaign=instagram&ranMID=45837&ranEAID=8hecCNwSw7c&ranSiteID=8hecCNwSw7c-6AhmHJZDr0OGOJm3ceoieg"
        downloadText="BUY GORGEOUS GYM CLOTHING NOW"
      />
      <Separator />
      <Content
        heading="50% OFF my best selling 8 WEEK LEAN TRANSFORMATION GUIDE"
        link="https://www.leanwithlilly.com/products/video-8-week-lean-transformation-guide"
        downloadText="BUY NOW"
      />
      <Separator />
      <Content
        heading="LEAN RESISTANCE BANDS"
        link="https://www.leanwithlilly.com/collections/resistance-bands/"
        downloadText="BUY NOW"
      />
      <Separator />
      <Content
        heading="MERCHANDISE SHOP"
        link="https://s1.merchandise-essentials.com/wp-content/uploads/2020/08/bg-all-products-3-1.jpg"
        downloadText="BUY NOW"
      />
      <Separator />
    </div>
  );
}

export default App;
