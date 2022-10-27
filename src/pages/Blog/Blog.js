import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is cors</Accordion.Header>
          <Accordion.Body>
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax
            the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API. In other words, CORS is a browser security feature
            that restricts cross-origin HTTP requests with other servers and
            specifies which domains access your resources.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why to use fire base and other options to authentication
          </Accordion.Header>
          <Accordion.Body>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. some firebase alternatives are: Heroku, Kuzzle,
            Appwrite, kumulos etc
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does private route works.?</Accordion.Header>
          <Accordion.Body>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            WHat is node amd how does node works.?
          </Accordion.Header>
          <Accordion.Body>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. It is a used
            as backend service where javascript works on the server-side of the
            application. This way javascript is used on both frontend and
            backend. Node. js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
