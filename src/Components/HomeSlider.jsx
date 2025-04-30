import React from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomeSlider = () => {
  return (
    <>
      <div
        style={{ marginTop: "10px", textAlign: "center", position: "relative" }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "black",
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          WELCOME TO AIRLINE RESERVATION SYSTEM
        </h1>
        <Image
          src="./images/airlinebg.jpg"
          fluid
          style={{ width: "100%", height: "90vh", objectFit: "cover" }}
        />
      </div>

      {/* Home Page Content */}
      <div>
        <Container
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ padding: "50px" }}
        >
          <h1 className="fw-bold">Plan Your Travel with Confidence</h1>
          <p className="text-muted">
            Find Help With Your Bookings. Happy Journey....!
          </p>
        </Container>
        <Container className="text-center">
          {/* Title Section */}
          <h1 className="fw-bold text-primary">
            Find And Book A Great Experience
          </h1>
          <p className="text-muted mx-auto w-50">
            Online airline booking systems allow users to book flights from
            anywhere using the internet. They provide a seamless way to search,
            compare, and book airline tickets without visiting a physical
            office.
          </p>

          {/* Features Section */}
          <Container className="py-5 text-center">
            {/* Section Heading with Background Image */}
            <div
              className="py-5 text-white"
              style={{
                background: 'url("./images/airline-banner.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="fw-bold display-5 text-dark">
                Exciting Features of Our Airline Booking System
              </h2>
            </div>

            {/* Features Section */}
            <Row className="justify-content-center mt-4">
              <Col md={6} lg={5} className="mb-4">
                <Card className="shadow-sm border-0 text-center">
                  <Card.Img
                    variant="top"
                    src="./images/airport-terminal.jpg"
                    alt="Search Flight"
                  />
                  <Card.Body>
                    <h5 className="fw-bold">Flight Search & Comparison</h5>
                    <p>
                      🔍 Find the best flights based on date, destination, and
                      price.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={5} className="mb-4">
                <Card className="shadow-sm border-0 text-center">
                  <Card.Img
                    variant="top"
                    src="./images/flightStatus.jpg"
                    alt="Status Update"
                    height={290}
                  />
                  <Card.Body>
                    <h5 className="fw-bold">Flight Status & Notifications</h5>
                    <p>
                      📢 Get real-time updates about your flight status
                      instantly.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={5} className="mb-4">
                <Card className="shadow-sm border-0 text-center">
                  <Card.Img
                    variant="top"
                    src="/images/user-booking.jpg"
                    alt="User History"
                    height={290}
                  />
                  <Card.Body>
                    <h5 className="fw-bold">User Booking History</h5>
                    <p>
                      📝 Easily manage and access your previous flight bookings.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={5} className="mb-4">
                <Card className="shadow-sm border-0 text-center">
                  <Card.Img
                    variant="top"
                    src="/images/admin-booking.jpg"
                    alt="Admin Control"
                    height={290}
                  />
                  <Card.Body>
                    <h5 className="fw-bold">Admin Booking Management</h5>
                    <p>
                      🛠️ Admins can monitor user bookings and update flight
                      statuses.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          {/* Benefits Section */}
          <Container
            className="py-4"
            style={{
              background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
              borderRadius: "25px",
            }}
          >
            {/* Benefits Heading with Animated Underline */}
            <div className="text-center mb-4">
              <h3
                className="fw-bold display-6 text-dark text-uppercase position-relative"
                style={{
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Benefits
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    width: "60%",
                    height: "3px",
                    backgroundColor: "#007bff",
                    transform: "translateX(-50%) scaleX(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </h3>
            </div>

            {/* Benefits Cards */}
            <Row className="justify-content-center">
              {[
                {
                  icon: "🚀",
                  title: "Convenience",
                  desc: "Book tickets anytime, anywhere.",
                },
                {
                  icon: "⏳",
                  title: "Time-Saving",
                  desc: "Avoid standing in long queues.",
                },
                {
                  icon: "📱",
                  title: "User-Friendly",
                  desc: "Easy to use on mobile platforms.",
                },
              ].map((benefit, index) => (
                <Col md={4} key={index} className="mb-3">
                  <Card
                    className="shadow-lg p-3 border-0 text-center"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      width: "90%",
                      margin: "auto",
                      borderRadius: "25px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <Card.Body>
                      <h4 className="fw-bold">
                        {benefit.icon} {benefit.title}
                      </h4>
                      <p className="text-muted">{benefit.desc}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>

        {/* Popular Location */}

        <div>
          <Container className="py-5">
            <div className="text-center mb-4">
              <h3
                className="fw-bold display-6 text-dark text-uppercase position-relative"
                style={{
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
              >
                Popular Locations
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    width: "60%",
                    height: "3px",
                    backgroundColor: "#007bff",
                    transform: "translateX(-50%) scaleX(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </h3>
            </div>
            <p className="text-center text-muted">
              Connecting Needs with Offers for Professional Flight Services.{" "}
              <br />
              Book your next flight appointment with ease.
            </p>

            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">United Kingdom</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="./images/ukcountry.jpg"
                    alt="UK"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">United States</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/uscountry.jpg"
                    alt="USA"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Canada</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/canacountry.jpeg"
                    alt="Canada"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg postion-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Bahrain</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="./images/bahrain.jpeg"
                    alt="UK"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg postion-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Germany</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/germany.jpg"
                    alt="USA"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg postion-absolute"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Japan</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/japancountry.jpg"
                    alt="Canada"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {/* Card 1 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Kerala</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="./images/keralacountry.jpeg"
                    alt="UK"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Maldives</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/maldives.jpeg"
                    alt="USA"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4} sm={12} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-lg position-relative"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x text-secondary bg-light px-2 py-1 rounded"
                    style={{ marginTop: "120px" }}
                  >
                    <h5 className="fw-bold m-0">Switzerland</h5>
                  </div>
                  <Card.Img
                    variant="top"
                    src="/images/switzerland.jpeg"
                    alt="Canada"
                    height={250}
                    style={{ borderRadius: "20px" }}
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Review Count */}

        <div className="py-5">
          <Container>
            <Row className="align-items-center">
              {/* Left Content */}
              <Col lg={6} className="text-lg-start text-center">
                <h1 className="fw-bold mb-4">
                  Where luxury meets warmth, and every guest is welcomed like
                  family.
                </h1>
                <p className="text-muted">
                  Our goal is to craft unforgettable experiences for our guests,
                  ensuring that every visit feels exceptional. Whether you're
                  traveling for business, leisure, or a special event, we strive
                  to make your stay truly remarkable.
                </p>

                {/* Stats Section */}
                <Row className="mt-4">
                  <Col md={6} className="text-center mb-4">
                    <h3 className="fw-bold text-primary">55+</h3>
                    <p className="text-muted fw-bold">Destinations Worldwide</p>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <h3 className="fw-bold text-primary">100+</h3>
                    <p className="text-muted fw-bold">Providers Registered</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="text-center mb-4">
                    <h3 className="fw-bold text-primary">500+</h3>
                    <p className="text-muted fw-bold">Booking Completed</p>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <h3 className="fw-bold text-primary">5+</h3>
                    <p className="text-muted fw-bold">Clients Globally</p>
                  </Col>
                </Row>
              </Col>

              {/* Right Image */}
              <Col lg={6} className="text-center">
                <Image
                  src="./images/airlinereview.jpg"
                  alt="Airline Review"
                  className="img-fluid rounded shadow-lg"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
