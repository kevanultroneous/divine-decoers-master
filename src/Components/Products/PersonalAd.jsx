import { Col, Image, Row } from "react-bootstrap"
import mandir from "../../Assets/images/mandir.png"
const PersonalAd = () => {
    return (
        <Row className="footer-back mt-3  justify-content-center">
            <Col xl={4}>
                <Image src={mandir} height={250} />
            </Col>
            <Col xl={6} >
                <div className="mt-5">
                    <label>Any Temple Can Be Made In Any Size</label>
                    <p>
                        Temple width options 60cm/80cm/100cm/120cm/150cm/180cm/200cm/250cm
                        or custom width like 92cm. Height, depth, colour customisable. Laminates and
                        australian woods used.
                    </p>
                    <label>Order to delivery 10-12 weeks.</label>
                </div>
            </Col>
        </Row>
    )
}
export default PersonalAd