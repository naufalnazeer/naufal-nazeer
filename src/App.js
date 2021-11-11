// import logo from './logo.svg';
import './App.css';
import logo from './icons/logo.png'
import img1 from './icons/address.png'
import img2 from './icons/email.png'
import img3 from './icons/phone.png'
function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="header">
          <div className="left">
            <img src={logo} />
          </div>
          <div className="right">

            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li ><a id="contact" href="#"> contact </a></li>
            </ul>
          </div>
        </div>
        <div className="subHead">
          <div className="subLeft">
            <h1>Contact us</h1>
          </div>
          <div className="subRight">
            <ul>
              <li><a href="#">Home{" <"}</a></li>
              <li><a href="#">Contact </a></li>
            </ul>
          </div>
        </div>
        <div className="mainBody">
          <div className="mainLeft">
            <div className="info">
              <h1>Get in touch with us</h1>
              <p>contact us for a website,mobile application,Digital marketing<br />
            or IT suppport</p>
            </div>
            <div className="location">
              <img src={img1} width="40"
                height="40" />
              <p>Innovfide Technologies<br />
              Anulekha,Anurag Nagar,Tulinj,<br />
              Nallasopara East</p>
            </div>
            <div className="email">
              <img src={img2} width="40"
                height="40" />
              <p>business@innovfide.com</p>
            </div>
            <div className="phone">
              <img src={img3} width="40"
                height="40" />
              <p>+91 8767484648</p>
            </div>

          </div>
          <div className="mainRight">
            <div className="userForm">
              <form className="form">
                <table>
                  <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                  </tr>
                  <tr>
                    <td><input type='text' placeholder="Please enter your First Name" /></td>
                    <td><input type='text' placeholder="Please enter your Last Name" /></td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>Phone</td>
                  </tr>
                  <tr>
                    <td><input type='text' placeholder="Please enter your Email" /></td>
                    <td><input type='text' placeholder="Please enter your no." /></td>
                  </tr>
                </table>
              </form>
            </div>
            <div className="webSite">
              <h1>Do you have awebsite</h1>
              {/* <label>
                <input type="radio" value="yes" name="web" checked>Yes</input>
                <input type="radio" value="no" name="web" checked>No</input>
              </label> */}
              <h1> website URL</h1>
              <input type="text" placeholder="Please enter your website URL" />
            </div>
          </div>
        </div>
        <div className="footer">
          <h1>All Rights Reserved |</h1>
          <h1>innovfide Technologies |</h1>
          <h1>2021</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
