import { Card, Col, Image, Row } from "react-bootstrap";
import comma from "../../Assets/images/comma.png"
import ReactStars from "react-rating-stars-component"
const CardForTesti = (props) => {
    return (
        <Card style={{ background: '#FFEFE2' }} className="ms-xl-5 ms-1 me-1 me-xl-5 ms-md-3 me-md-3 card-border border-0 shadow mt-3 mb-4 p-4 p-md-4">
            <Card.Body>
                <Card.Title>
                    <Image src={comma} />
                </Card.Title>
                <Card.Text className="mt-4">
                    {props.paragraph}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="border-0 bg-transparent">
                <Row>
                    <Col xl={3} xs={4} md={4} lg={4}>
                        <Image src={props.user} />
                    </Col>
                    <Col xl={9} xs={8} md={8} lg={8}>
                        <Row>
                            <Col>
                                <label className="carousel-label">{props.username}</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ReactStars
                                    edit={false}
                                    value={props.star}
                                    size={25}
                                    classNames="carousel-star"
                                    isHalf={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
export default CardForTesti;