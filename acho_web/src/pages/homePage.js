import React from "react";
import "../css/homePage.css";
// 

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Landing Page */}
      <div className="landing-page">
        <div className="background-gif"></div>
        <div className="content">
          {/* Left Side */}
          <div className="left-side">
            <div className="vertical-division">
              <hr className="divider-line" />
              <h3>Heading-1</h3>
              <p>Short description goes here for section 1.</p>
            </div>
            <div className="vertical-division">
              <hr className="divider-line" />
              <h3>Heading-2</h3>
              <p>Short description goes here for section 2.</p>
            </div>
            <div className="vertical-division">
              <hr className="divider-line" />
              <h3>Heading-3</h3>
              <p>Short description goes here for section 3.</p>
            </div>
            <div className="vertical-division">
              <hr className="divider-line" />
              <h3>Heading-4</h3>
              <p>Short description goes here for section 4.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-side">
            <h1>Discover new products and possibilities</h1>
            <p>
              Unleash your curiosity and explore a world of innovation. Our
              platform connects you with the latest products and groundbreaking
              ideas, empowering you to transform your everyday experiences.
            </p>
            <button className="cta-button">Book a Demo</button>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="offerings-section">
      <h2 className="section-title">Our Offerings</h2>
      <div className="offering">
        <div className="offering-text">
          <h3 className="offering-title">Device Host</h3>
          <p className="offering-description">
            Reliable Device Hosting Services: Securely store and manage your
            website's files on our robust servers, ensuring high availability
            and performance. Our scalable solutions cater to businesses of all
            sizes, offering 24/7 support, advanced security features, and
            customizable plans to meet your unique needs.
          </p>
          <button className="analytics-platform-button">Learn More</button>
        </div>
        <div className="offering-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/e18a/ae2f/e2968fc3b12097e90399019f14249a4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOR858gJOWUopliNXOMG1rvodi54TwIGeNqLHrvsVtRa6PPU6o3LKYSjPhnvEmknYKRP7NicxVhRUKpaKvl5JlHtGenb7HhvB7VUAk~umB0UsjviUGFSCgBRJO2CbWRC0o-zbYrwk~rL-9YAvh3rV10PhdCAoNukDAxMCeB5hTIVahqsXinfhED8cUTrsiaL8cX6OKmuSRRMP8SJKeUcTGPfVcH8fzXMslillJiJJ3vGy6YX2REbuvGopSSuLjh2T28N6JJT0TuDu2pJz8zr0iOBwb~YxEV8m5-czYMjQVfCf0lLpmk1NlzIAySKvp6LxEMD-5FadGBYjQe8dYtaow__"
            alt="Device Host"
            className="image"
          />
        </div>
      </div>
    </div>
    {/* Mobile Application Section */}
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
            <h2 className="mobile-app-title">Mobile Application</h2>
            <p className="mobile-app-description">
              Unlock the potential of your business with our cutting-edge mobile
              application development services. We specialize in creating
              user-friendly, high-performance apps tailored to your unique
              needs. Whether you're looking to enhance customer engagement,
              streamline operations, or boost sales, our expert team is here to
              bring your vision to life.
            </p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>
    {/* Analytics-platform */}
    <div className="analytics-platform-section">
        <div className="analytics-platform">
            <div className="analytics-text">
            <h2 className="analytics-title">Analytics Platform</h2>
            <p className="analytics-description">
                Unlock the potential of your business with Engagement Analytics & Impact
                Management. Our cutting-edge solution provides a comprehensive analysis
                of user interactions across digital platforms, enabling you to
                understand customer behavior, preferences, and satisfaction levels.
            </p>
            <button className="analytics-platform-button">Learn more</button>
            </div>
            <div className="analytics-image">
            <img
                src="https://s3-alpha-sig.figma.com/img/780e/f4cf/a1a24dbe9541e667bfe8657014b1a174?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d6ECgMYr1vU71iJIY7KeGKwjFXvf7pwj9HJoH5F9IXR9jFplCcw6ssCFOg9avVZe0p9l8qVPrEU1GWfK4zkXPmyXmUA5mPJ9fnW58khVr4tqVDzS29PXS88uSBrtLe4cJLbInUM7B-Jt4dVwom2Zih-kI-Xu0Fh~x5OA1XZ9o69jISMsd~3cXS~iOTYJL2s693nqUSDwAnGFju6ivYQws6iBXJKREcbvD0CV47zQPzq3YIivd-fEzUWLeBsb7yASCULkoKcyUGwajyhNnc~aFKic5XV9XEJ4~Du3nzMEUQ-fj8S-Xhi6jyBjQw-eCsrlm~HKHC8u85VCbaO1OgEZIA__"
                alt="Analytics Platform"
                className="image"
            />
            </div>
        </div>
        </div>
        <div className="features">
        <div className="features-section" id="features">
      <h2 className="features-title">Features</h2>
      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-badge">Popular</div>
          <h3 className="feature-heading">Host and Adapt to Most Infrastructure (Integration)</h3>
          <p className="feature-description">
            Static websites are now used to bootstrap lots of websites and are becoming the
            basis for a variety of tools that even influence both web designers and developers.
          </p>
          <a href="#read-more" className="feature-link">Read more →</a>
        </div>
        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-badge">Popular</div>
          <h3 className="feature-heading">Connectivity Performance</h3>
          <p className="feature-description">
            Static websites are now used to bootstrap lots of websites and are becoming the
            basis for a variety of tools that even influence both web designers and developers.
          </p>
          <a href="#read-more" className="feature-link">Read more →</a>
        </div>
        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-badge">Popular</div>
          <h3 className="feature-heading">Decision Making</h3>
          <p className="feature-description">
            Static websites are now used to bootstrap lots of websites and are becoming the
            basis for a variety of tools that even influence both web designers and developers.
          </p>
          <a href="#read-more" className="feature-link">Read more →</a>
        </div>
        {/* Feature 4 */}
        <div className="feature-card">
          <div className="feature-badge">Popular</div>
          <h3 className="feature-heading">Valuable Insights</h3>
          <p className="feature-description">
            Static websites are now used to bootstrap lots of websites and are becoming the
            basis for a variety of tools that even influence both web designers and developers.
          </p>
          <a href="#read-more" className="feature-link">Read more →</a>
        </div>
        </div>
      </div>
    </div>
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

export default HomePage;




































// import React from "react";
// import "../css/homePage.css";

// const HomePage = () => {
//   return (
//     <div className="landing-page">
//       {/* Background GIF */}
//       <div className="background-gif"></div>

//       {/* Main content */}
//       <div className="content">
//         {/* Left Side */}
//         <div className="left-side">
//         <div className="vertical-division" >
//             <hr className="divider-line" />
//               <h3>Heading-1 </h3>
//               <p>Short description goes here for section 1.</p>
//             </div>
//             <div className="vertical-division" >
//             <hr className="divider-line" />
//               <h3>Heading -2</h3>
//               <p>Short description goes here for section 2.</p>
//             </div>
//             <div className="vertical-division" >
//             <hr className="divider-line" />
//               <h3>Heading-3</h3>
//               <p>Short description goes here for section 3.</p>
//             </div>
//             <div className="vertical-division" >
//             <hr className="divider-line" />
//               <h3>Heading-4</h3>
//               <p>Short description goes here for section 4.</p>
//             </div>
//         </div>

//         {/* Right Side */}
//         <div className="right-side">
//           <h1>Discover new products and possibilities</h1>
//           <p>
//             Unleash your curiosity and explore a world of innovation. Our
//             platform connects you with the latest products and groundbreaking
//             ideas, empowering you to transform your everyday experiences.
//           </p>
//           <button className="cta-button">Book a Demo</button>
//         </div>
//       </div>

//     </div>
    
//   );
// };

// export default HomePage;
