import React from "react";

function Connect() {
  return (
    <section className="home-connect">
      <div className="home-connect-text">
        <header className="template-heading">
          <div className="template-heading-header">
            <hr />
            <p>We’re here to help</p>
          </div>
          <h2>Let’s Connect</h2>
        </header>
        <p className="home-connect-text-para">
          Real growth happens when strategy, systems, and people move in sync.
          It's about precision, not just passion.
        </p>
        <div className="home-connect-links">
          <a href="tel:+917400219151" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.39 14.39 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                stroke="#C41E3A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            +91 74002 19151
          </a>
          <a href="mailto:scalecraftassist@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                fill="#C41E3A"
              />
            </svg>{" "}
            scalecraftassist@gmail.com
          </a>
        </div>
      </div>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email address"/>
        <input placeholder="Contact Number"/>
        <textarea placeholder="Message"/>
        <button type="submit" className="primary-button">Request Audit</button>
      </form>
    </section>
  );
}

export default Connect;
