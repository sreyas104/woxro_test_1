import './App.css';
import img from "./assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png"
import img2 from "./assets/Mask group (2).png"
import img3 from "./assets/Mask group (3).png"
import img4 from "./assets/Mask group (4).png"


function App() {
  return (
    <div className="home_main_div">
      <div className="home_div">
        <div className="home_main_content">
          <div className="home_heading">Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</div>
          <img src={img} />
          <div className="home_paragraph">Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</div>
          <button className="home_button">Visit Website</button>
        </div>
        <div className="home_cards_main_div">
          <div className="home_cards_div">
            <div className="card">
              <img src={img2} />
              <div>Explore large, destructible environments where no two games are ever the same.</div>
            </div>
            <div className="card">
              <img src={img3} />
              <div>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</div>
            </div>
            <div className="card">
              <img src={img4} />
              <div>Discover even more ways to play across thousands of creator-made game genres</div>
            </div>
          </div>
        </div>
        <div className="home_bar_div">
          <div className="home_bar_heading">Our Contribution</div>
          <div className="home_bar_paragraph">Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</div>
          <div className="home_bars">
            <div className="bar">
              <div className="bar_heading">5M</div>
              <div className="bar_paragraph">Daily User Engagements</div>
            </div>
            <div className="bar">
              <div className="bar_heading">$500k</div>
              <div className="bar_paragraph">Revenue Surge for an Platform</div>
            </div>
            <div className="bar">
              <div className="bar_heading">10x</div>
              <div className="bar_paragraph">ROAS on all our marketing campaigns</div>
            </div>
          </div>
        </div>
        <div className="home_contact_div">
          <div className="contact_heading">Interested in delving deeper into the project?</div>
          <div className="contact_paragraph">If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span>hello@abc.com</span> or give us a call at <span>+91 480 20802730.</span></div>
          <div className="contact_button_div">
            <button className="contact_button_1">Ring us on Skype</button>
            <button className="contact_button_2">Ring us on Skype</button>
          </div>
        </div>
        <div className="copy_rights">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</div>
      </div>
    </div>
  );
}

export default App;
