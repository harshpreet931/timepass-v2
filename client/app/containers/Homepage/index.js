/**
 *
 * Homepage
 *
 */

import React from "react";
import { connect } from "react-redux";
import { Row, Col, Jumbotron, Button, Container } from "reactstrap";
import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import "./homepage.scss";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <Container>
          <Jumbotron className="homepage-hero text-center">
            <h1 className="display-4">Welcome to Awesome Shop</h1>
            <p className="lead">Your one-stop shop for amazing products.</p>
            <hr className="my-4" />
            <Button color="primary" href="/shop" className="shop-now-btn">
              Shop Now
            </Button>
          </Jumbotron>
        </Container>
        <Row className="flex-row">
          <Col xs="12" lg="6" className="order-lg-2 mb-3 px-3 px-md-2">
            <div className="home-carousel">
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-1 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img
                src="/images/banners/banner-2.jpg"
                className="mb-3 banner-image"
              />
              <img src="/images/banners/banner-5.jpg" className="banner-image" />
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-3 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img
                src="/images/banners/banner-2.jpg"
                className="mb-3 banner-image"
              />
              <img src="/images/banners/banner-6.jpg" className="banner-image" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
