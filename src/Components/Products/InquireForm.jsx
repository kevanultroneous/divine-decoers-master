import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import close from "../../Assets/images/close.png"
const Inputs = (p) => {
    return (
        <Row className="mt-4 mb-3">
            <Col xl={12}>
                <label className="fs-16 fw-600">{p.name}</label>
            </Col>
            <Col xl={12}>
                <input
                    className="in-form w-100 p-2"
                    placeholder={p.placeholder}
                    type={p.type} />
            </Col>
        </Row>
    )
}
const InquireForm = (props) => {
    return (
        <Modal
            show={props.showIm}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="p-5" style={{ background: '#FFEFE2', borderRadius: '12px' }}>
                <div className="text-end">
                    <Image src={close} height={35} onClick={props.hide}/>
                </div>
                <Row>
                    <Col>
                        <div>
                            <label className="fw-700 in-from-hd">
                                Inquire Now
                            </label>
                        </div>
                        <div>
                            <label className="fw-500 in-form-para">
                                Please fill out the following form and we will contact you soon.
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 mb-3">
                    <Col>
                        <label className="fw-700 in-form-sub">Modern  Temple</label>
                    </Col>
                </Row>
                <Inputs
                    name="Name*"
                    type="text"
                    placeholder="Enter Name"
                />
                <Inputs
                    name="Email Address*"
                    type="text"
                    placeholder="Enter email address"
                />
                <Inputs
                    name="Phone Number*"
                    type="text"
                    placeholder="Enter Phone Number"
                />
                <Inputs
                    name="Frame/Pillar Number*"
                    type="text"
                    placeholder="Enter Frame/Pillar Number"
                />
                <Row >
                    <Col xl={12}>
                        <label className="fs-16 fw-600">Size* (in cms)</label>
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Width : "
                            type="" />
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Hight : "
                            type="" />
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Depth : "
                            type="" />
                    </Col>
                </Row>
                <Row className="mt-4 mb-3">
                    <Col xl={12} className="fs-16 fw-600">
                        <label className="fw-700">Description</label>
                    </Col>
                    <Col xl={12}>
                        <textarea placeholder="Type here..." className="in-form p-3 w-100">
                        </textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className=" mt-3 btn btn-primary">Submit</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}
export default InquireForm