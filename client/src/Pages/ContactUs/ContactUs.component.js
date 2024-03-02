import { Component } from "react";
import { email as emailIcon, instagram, youtube, facebook } from "../../Utils/Icons";
import photoManWhite from "../../Shared/photoManWhite.png";
import "./ContactUs.style.scss";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", this.state);
  };

  render() {
    const { name, email, phoneNumber, message } = this.state;
    return (
      <div className="Contact-Container">
        <div className="Contact-wrapper">
          <div className="header">
            <h3>Just say hi !</h3>
            <span>Tell us more about you and we'll contact you soon :)</span>
          </div>
          <div className="content">
            <form onSubmit={this.handleSubmit}>
              <div className="field-group">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
            <div className="logo-wrapper">
              <img
                className="Image"
                loading="lazy"
                src={photoManWhite}
                alt="PhotoMan-logo"
              />
            </div>
            <div className="Right-Side">
              <h4 className="Title">Contact Information</h4>
              <span className="Details-Wrapper Address">
                No 72 Ramana Gounder Nagar, Sankaralinganar Street,
                Maniyakarpalayam, Coimbatore, Tamil Nadu, 641006, India
              </span>
              <span className="Details-Wrapper">
                Call us: 9791678582, 9952383862, 9159954482.
              </span>
              <span className="Details-Wrapper">
                <i className="Icons">{emailIcon()}</i>
                thephotomaninfo@gmail.com
              </span>
              <div className="Social-Media">
                <h3>Follow us</h3>
                <div className="icons-wrapper">
                  <a
                    className="Icons"
                    href=" https://instagram.com/thephotomanphotography?igshid=YmMyMTA2M2Y="
                    target="_blank"
                  >
                    {instagram()}
                  </a>
				  <a
					className="Icons"
					href="https://youtube.com/@thephotomanphotography4953"
					target="_blank"
					rel="noreferrer"
					>
					{facebook()}
				  </a>
                  <a
                    className="Icons"
                    href="https://youtube.com/@thephotomanphotography4953"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {youtube()}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
