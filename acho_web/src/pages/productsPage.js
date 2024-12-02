
import React from "react";
import "../css/ProductPage.css";



const ProductPage = () => {
  return (
    <div className="horizontal-container">
      {/* Landing Section */}
      <section className="landing-section">
        <div className="landing-content">
          <h1 className="landing-title">Empowering Innovation in Your Hands</h1>
          <p className="landing-description">
            Experience the freedom to create, collaborate, and connect with our
            advanced technology solutions. Empowering you with tools that
            enhance your capabilities and drive success in every endeavor.
          </p>
          <div className="landing-buttons">
            <button className="btn primary-btn">Book a Demo</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <div>
          <h2 className="section-title">Products</h2>
          <div className="offering">
            <div className="offering-text">
              <h3 className="offering-title">A/B Testing Engine</h3>
              <p className="offering-description">
              Unlock the full potential of your marketing strategy with our
            powerful A/B testing tool. Designed for marketers and business
            owners, our solution allows you to effortlessly compare two
            versions of your landing pages, emails, or ads to determine which
            performs better.
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>
            <div className="offering-image">
              <img
                src="https://s3-alpha-sig.figma.com/img/54e9/a2da/9d8c38c6d49c2fa9d9fc2af2e52ca629?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ICL03RyFKjyjH2nee~v525PD4spQdPUPxygU55EpandMkl0dHm2rRRcFTA3zykb1sRzLlPCj8rv5BrSWoYYyeiCIT5t96aQl-JHf4xdYwzMdH5wxU7RxXxJYibmlmYIeQOFpT6-5D6wftGNBDEUE59l4AVSaXvBr0EhBst4BN0gmFBo6wT-cO~lcC028WYVlaHDNdsbtWSoNA--PjUeFIhGydo07VLIN69w0Ebvj2FhMesEIaDOVVXnpex6xtCPMgY-viZHiWHjIiz1TUspJ2DuMZwEt-jEtxJgBU~PXdoSaaZSvX-TXhZRJLm~QxZvk4V6oLdD9LEqEHdPIYRGiww__"
                alt="Device Host"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-app-section">
        <div className="mobile-app">
          {/* Image Section */}
          <div className="mobile-app-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/4cd2/d77c/a76c508b3b7e8c984ff9e80cceb69dc4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mp0EU1i-bVYMJg~ZAIbOrBBDMcSEQ~SJ2tQg-cJ8au6~IC0KTanQhLKkNu5PQkQT-1O5BhJeF9Q6bbCQOPXgBUY0c9kfV1gvDvrFMEkVzDc5yfbxvQoaFt5mTba364NFYwO0vR2mCg-0ISuQL-bIaXd00G3RyNbOoAySmpuqfpHg4EcfEtqD-amNmqsHQX8bZ3P4ajTd2gG-R5oWaTujyEo~dUXMzf4uLkxBqk6HF9vBv~u4gTuwRbx1EMToYtmlNLGvm26cBIx33Zlq5XxNMIdBi3KNJ5b42qjLU7H8ayqzHOkBKEKoLHlc02ohNiDMz2JuhtA17ree~qJbY97Hbw__"
              alt="Mobile Application"
              className="image"
            />
          </div>
          {/* Text Content */}
          <div className="mobile-app-text">
            <h2 className="mobile-app-title">QoE Monitoring</h2>
            <p className="mobile-app-description">
            Transform your video streaming service with our cutting-edge QoE Monitoring solution. Designed for real-time analysis, it provides comprehensive insights into the Quality of Experience (QoE) for your viewers. By leveraging advanced data processing and AI, our system identifies and diagnoses video quality issues as they occur, ensuring a seamless viewing experience.
            </p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>
   

     {/* Offerings Section */}
     <section className="offerings-section">
     <div>
       <div className="offering">
         <div className="offering-text">
           <h3 className="offering-title">Engagement Analytics & Impact Management</h3>
           <p className="offering-description">
           Unlock the potential of your business with Engagement Analytics & Impact Management. Our cutting-edge solution provides a comprehensive analysis of user interactions across digital platforms, enabling you to understand customer behavior, preferences, and satisfaction levels.
           </p>
           <button className="learn-more-button">Learn More</button>
         </div>
         <div className="offering-image">
           <img
             src="https://s3-alpha-sig.figma.com/img/9da4/ef87/9624c01a0d635f2f0a23a0da275ac791?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M3SEI-ZVyM1k~Lwsb5j1E4Y3QMSIvDwUM9tQdO4CArIQbjMXfKggbbcGwmgYTrV6WL3q2l8v2r~itgv3Pg4VxLije72ymEgYBUQXvbHhREytXrB6plf8z4HMQs44OqJY1hMOWXvm5Pj6BNIklCfaci72h-6hINtyWDa2tbat5oOX3y0PumcMeVBiEBMqGHsbbjXYCfTie2qdhGDWK3igMGYg90egiTC22HmOgXrLVu65rLYBlSU4ZTEDkk13-VmPDVsWcCEULPkkSNvtkGwDT7nBzxah8Y-Vghw-m0VfDCsoJZv7ZLjmzjxPSPtXfvmQUDH27PttM5EqkWj2fFNLSw__"
             alt="Device Host"
             className="image"
           />
         </div>
       </div>
     </div>
   </section>

   <div className="mobile-app-section">
        <div className="mobile-app">
          {/* Image Section */}
          <div className="mobile-app-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/e973/2162/aca4e8607aeb4c39972665985cdff05b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqtKSuhkwbV87gEMC9o1l~v59sNjQFuSemvy6j5lguy81saWzeO4pUuu4IjwO-f~Lswjz7HMQ-Uf-00bDkBlhnxhag~kE44XwEc-yIowt47fsWgs~UCDLKqgijnDjDsSqvMXoRqvNLWfOML7fa4roZjwyWrg7w7fX5XOC9sCaKeXeubPNObWn7T~3opbbnKG4cCjZxQi4CRFJvo6gpcoTaj0J7AuvzAM-BqHg2Gvv0EdZbqxU-t-1XNAhgii2aVJYuhxpm3sZ-s3UARl4lqLlP0cO9zzfTk1Bza3MuEUVVREUx9cMz2O7fPzqsxEPv4IkN2dfO0rbp~1dFKrEinz-Q__"
              alt="Mobile Application"
              className="image"
            />
          </div>
          {/* Text Content */}
          <div className="mobile-app-text">
            <h2 className="mobile-app-title">Automated Reporting & Insights</h2>
            <p className="mobile-app-description">
            Transform your data into actionable intelligence with our Automated Reporting & Insights solution. Designed for businesses of all sizes, this powerful tool streamlines the reporting process, delivering real-time insights at your fingertips. Say goodbye to manual data crunching and hello to intuitive dashboards that highlight key performance metrics, trends, and anomalies.
             </p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
     <section className="offerings-section">
     <div>
       <div className="offering">
         <div className="offering-text">
           <h3 className="offering-title">Mobile Application</h3>
           <p className="offering-description">
           Unlock the potential of your business with our cutting-edge mobile application development services. We specialise in creating user-friendly, high-performance apps tailored to your unique needs. Whether you're looking to enhance customer engagement, streamline operations, or boost sales, our expert team is here to bring your vision to life.
           </p>
           <button className="learn-more-button">Learn More</button>
         </div>
         <div className="offering-image">
           <img
             src="https://s3-alpha-sig.figma.com/img/4cd2/d77c/a76c508b3b7e8c984ff9e80cceb69dc4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mp0EU1i-bVYMJg~ZAIbOrBBDMcSEQ~SJ2tQg-cJ8au6~IC0KTanQhLKkNu5PQkQT-1O5BhJeF9Q6bbCQOPXgBUY0c9kfV1gvDvrFMEkVzDc5yfbxvQoaFt5mTba364NFYwO0vR2mCg-0ISuQL-bIaXd00G3RyNbOoAySmpuqfpHg4EcfEtqD-amNmqsHQX8bZ3P4ajTd2gG-R5oWaTujyEo~dUXMzf4uLkxBqk6HF9vBv~u4gTuwRbx1EMToYtmlNLGvm26cBIx33Zlq5XxNMIdBi3KNJ5b42qjLU7H8ayqzHOkBKEKoLHlc02ohNiDMz2JuhtA17ree~qJbY97Hbw__"
             alt="Device Host"
             className="image"
           />
         </div>
       </div>
     </div>
   </section>
   <div class="contact-page">
    <div class="contact-header">
    <h1 class="contact-title">Contact Us</h1>
    <p class="contact-description">
      We’re here to help! Whether you have questions, feedback, or need assistance, our dedicated team is ready to assist you. 
      Reach out to us through the form below, and we’ll get back to you as soon as possible. Your inquiries are important to us, 
      and we strive to provide prompt and helpful responses. Let’s connect!
    </p>
  </div>
  <div class="contact-container">
    <form class="contact-form">
      <div class="form-group">
        <label for="first-name" class="form-label">First name</label>
        <input type="text" id="first-name" placeholder="First name" class="form-input" />
      </div>
      <div class="form-group">
        <label for="last-name" class="form-label">Last name</label>
        <input type="text" id="last-name" placeholder="Last name" class="form-input" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" id="email" placeholder="name@example.com" class="form-input" />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone Number</label>
        <input type="tel" id="phone" placeholder="--- --- ----" class="form-input" />
      </div>
      <div class="form-group">
        <label for="comments" class="form-label">Comments</label>
        <textarea id="comments" placeholder="Enter here" class="form-input"></textarea>
      </div>
      <p class="privacy-note">
        We’ll never share your details. See our <a href=" # " class="privacy-link">Privacy Policy</a>.
      </p>
      <button type="submit" class="contact-submit-button">Submit</button>
    </form>
  </div>
</div>
   </div>
  );
};

export default ProductPage;






































// import React from "react";
// import "../css/ProductPage.css";

// const ProductPage = () => {
//   return (
//     <div className="landing-section">
//       <div className="landing-content">
//         <h1 className="landing-title">Empowering Innovation in Your Hands</h1>
//         <p className="landing-description">
//           Experience the freedom to create, collaborate, and connect with our advanced technology solutions. 
//           Empowering you with tools that enhance your capabilities and drive success in every endeavor.
//         </p>
//         <div className="landing-buttons">
//           <button className="btn primary-btn">Book a Demo</button>
//           <button className="btn secondary-btn">Learn more</button>
//         </div>
//       </div>

//        {/* Offerings Section */}
//        <div className="offerings-section">
//       <h2 className="section-title">Our Offerings</h2>
//       <div className="offering">
//         <div className="offering-text">
//           <h3 className="offering-title">Device Host</h3>
//           <p className="offering-description">
//             Reliable Device Hosting Services: Securely store and manage your
//             website's files on our robust servers, ensuring high availability
//             and performance. Our scalable solutions cater to businesses of all
//             sizes, offering 24/7 support, advanced security features, and
//             customizable plans to meet your unique needs.
//           </p>
//           <button className="analytics-platform-button">Learn More</button>
//         </div>
//         <div className="offering-image">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/e18a/ae2f/e2968fc3b12097e90399019f14249a4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOR858gJOWUopliNXOMG1rvodi54TwIGeNqLHrvsVtRa6PPU6o3LKYSjPhnvEmknYKRP7NicxVhRUKpaKvl5JlHtGenb7HhvB7VUAk~umB0UsjviUGFSCgBRJO2CbWRC0o-zbYrwk~rL-9YAvh3rV10PhdCAoNukDAxMCeB5hTIVahqsXinfhED8cUTrsiaL8cX6OKmuSRRMP8SJKeUcTGPfVcH8fzXMslillJiJJ3vGy6YX2REbuvGopSSuLjh2T28N6JJT0TuDu2pJz8zr0iOBwb~YxEV8m5-czYMjQVfCf0lLpmk1NlzIAySKvp6LxEMD-5FadGBYjQe8dYtaow__"
//             alt="Device Host"
//             className="image"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProductPage;
