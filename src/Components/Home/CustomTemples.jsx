import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { customTempleList } from "../../common/common";
import LabelOfContent from "../common/LabelOfContent";
import ProductCard from "../Products/ProductCard";
const CustomTemples = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/customtemples')
  }
  return (
    <>
      <LabelOfContent title={"Custom Temples"} />
      <Row className="justify-content-center mx-lg-5">
        {
          customTempleList.map((value, index) =>
            <ProductCard
              image={value.image}
              name={value.name}
              price={value.price}
            />
          )
        }
      </Row>
      <Row className="text-center mt-5">
        <Col lg="12">
          <div className="btn btn-primary" onClick={() => handleNavigate()}>View All</div>
        </Col>
      </Row>
    </>
  );
};
export default CustomTemples;
