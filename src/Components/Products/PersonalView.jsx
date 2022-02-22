import { useState } from "react"
import { Button, Col, Image, Row } from "react-bootstrap"
import { personalViewList, sliderRes } from "../../common/common"
import Slider from "react-slick/lib/slider"
import InquireForm from "./InquireForm"
const PersonalView = () => {
    const [product_information, setProduct_information] = useState(personalViewList.information)
    const [sliderArray, setSliderArray] = useState(personalViewList.images)
    const [selectedItm, setSelectedItem] = useState('')
    const [hItem, setHItem] = useState('')
    const [dis, setDis] = useState('none')
    const [inf, setInf] = useState(false)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: sliderRes
    };
    const onHoverAction = (img) => {
        setDis('block')
        setHItem(img)
    }
    const onHoverOutAction = () => {
        setDis('none')
        setHItem('')
    }
    const ModalImgV = (p) => {
        return (
            <div className="mv position-absolute m-mv" style={{ display: p.display }}>
                <Image src={p.pl} height={250} />
            </div>
        )
    }
    return (
        <>
            <InquireForm
                showIm={inf}
                hide={() => setInf(false)}
            />
            <Row className="mt-3 mb-5 ms-xl-5">
                <Col xl={5} lg={8} xs={12}>
                    <Slider {...settings} className="mt-4 me-xl-5 ms-xl-5 mb-5">
                        {
                            sliderArray.map((value, index) =>
                                <div className="card p-0 border-0">
                                    <Image src={value} className="card-img-top" alt="" />
                                </div>
                            )
                        }
                    </Slider>
                </Col>
                <Col xs={12} xl={5}>
                    <div className="row">
                        <div className="col-12">
                            <label className="p-font">{personalViewList.label}</label>
                        </div>
                        <div className="col-12">
                            <p className="p-font-sub">{personalViewList.price}</p>
                        </div>
                        <div className="col-12">
                            <p className="p-font-sub2">Availabel : {personalViewList.available ? "In Stock" : "Out of Stock"}</p>
                        </div>
                        <div className="col-12">
                            <p className="p-sub-para w-100">{personalViewList.description}</p>
                        </div>
                    </div>
                    <ModalImgV pl={hItem} display={dis} />
                    <p style={{ color: '#44233B' }} className="fw-700">Select your Frame/Pillar</p>
                    <div className="row ms-xl-3 ms-3">
                        {personalViewList.pillers.map((v) =>
                            <Col xl={2} xs={4} md={2} className="p-0">
                                <label
                                    onMouseLeave={() => onHoverOutAction()}
                                    onMouseEnter={() => onHoverAction(v.img)}>
                                    <input
                                        type="radio"
                                        name="test"
                                        value={v.img}
                                        onChange={(e) => setSelectedItem(e.target.value)} />
                                    <Image src={v.img} />
                                    <p className="text-center fw-400 fs-12">{v.nm}</p>
                                </label>
                            </Col>
                        )}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-12 col-md-12 ms-md-5">
                            <Button className=" mt-3 btn btn-primary" disabled={selectedItm ? false : true} onClick={() => setInf(true)}>Inquire Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 mb-5 me-xl-5 ms-xl-5">
                <Col>
                    <label className="fw-bold list-font">Product Information</label>
                    <ul className="mt-5">
                        {product_information.map((v) => <li className="list-font">{v}</li>)}
                    </ul>
                </Col>
            </Row>
        </>
    )
}
export default PersonalView