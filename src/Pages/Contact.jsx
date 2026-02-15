import React from "react"; 
import email from "../../src/assets/email.png"
import phone from "../../src/assets/phone.png"
import address from "../../src/assets/maps-and-flags.png"

const Contact = () => {
  return (
    <div id="contact-page-cont">
      <div id="contact-info-cont">
      <div id="contact-info">
		  <h1>Contact Us</h1>
        <p>Any questions or remark ?{"  "} just write us a message</p>
        <div id="data">
          <div id="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div id="name">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <br />
        </div>
        <div id="textarea">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            cols={40}
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button id="submit-btn">Submit</button>
	  </div>
      </div>
      <div id="detail-info">
        <div id="detail-info-email">
			<img src={email} alt="" />
			<h3>Email US</h3>
			<p>nargisp360@gmail.com</p>
		</div>
        <div id="detail-info-phone"> 
			<img src={phone} alt="" />
			<h3>Phone(Landline)</h3>
			<p>9113147541</p>
		</div>
        <div id="detail-info-address">
			<img src={address} alt="" />
			<h3>Our office location</h3>
			<p>Hyderabad Nampally 500086</p>
		</div>
      </div>
    </div>
  );
};

export default Contact;
