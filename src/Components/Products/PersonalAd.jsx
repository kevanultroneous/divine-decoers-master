import { Col, Image, Row } from "react-bootstrap"
import mandir from "../../Assets/images/mandir.png"
const PersonalAd = () => {
    return (
        <Row className="footer-back mt-3 justify-content-around">
            <Col xl={2} xs={12} className="ms-xl-5">
                <Image src={mandir} height={250} width={'100%'} />
            </Col>
            <Col xl={6} xs={12}>
                <div className="mt-4">
                    <label className="text-white fw-600 fs-37">Any Temple Can Be Made In Any Size</label>
                    <p className="text-white fs-f-20">
                        Temple width options 60cm/80cm/100cm/120cm/150cm/180cm/200cm/250cm
                        or custom width like 92cm. Height, depth, colour customisable. Laminates and
                        australian woods used.
                    </p>
                    <label className="text-white fs-22 fw-700">Order to delivery 10-12 weeks.</label>
                </div>
            </Col>
        </Row>
    )
}
export default PersonalAd