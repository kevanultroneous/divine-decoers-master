import { Col, Container, Image, Row } from "react-bootstrap"
import { customTempleList2 } from "../common/common";
import Footer from "../Components/common/Footer";
import LabelOfContent from "../Components/common/LabelOfContent";
import DivineNavbar from "../Components/common/Navbar"
import ProductCard from "../Components/Products/ProductCard";

const CustomTemplePage = () => {
    return (
        <Container fluid className="back-contain">
            <DivineNavbar />
            <LabelOfContent title="Custom Temples" />
            <Row className="justify-content-center mx-lg-5 mb-5">
                {
                    customTempleList2.map((value, index) =>
                        <ProductCard
                            image={value.image}
                            name={value.name}
                            price={value.price}
                        />
                    )
                }
            </Row>
            <Row className="text-center mt-5 mb-5">
                <Col lg="12">
                    <div className="btn btn-primary" onClick={() => alert()}>See More</div>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}
export default CustomTemplePage;