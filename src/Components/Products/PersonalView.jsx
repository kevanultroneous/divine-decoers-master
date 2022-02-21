import { useState } from "react"
import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import { AiFillInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { personalViewList, sliderRes } from "../../common/common"
import Slider from "react-slick/lib/slider"
import pl from "../../Assets/images/plr.png"
import PersonalAd from "./PersonalAd"
const PersonalView = () => {
    const [product_information, setProduct_information] = useState(personalViewList.information)
    const [sliderArray, setSliderArray] = useState(personalViewList.images)
    const [selectedItm, setSelectedItem] = useState('')
    const [hItem, setHItem] = useState('')
    const [dis, setDis] = useState('none')

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
            <Row className="mt-3 mb-5 ms-xl-5">

                <Col xl={6} lg={8} xs={6}>
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
                <Col xl={5} className="mx-5">
                    <label className="p-font">{personalViewList.label}</label>
                    <p className="p-font-sub">{personalViewList.price}</p>
                    <p className="p-font-sub2">Availabel : {personalViewList.available ? "In Stock" : "Out of Stock"}</p>
                    <p className="p-sub-para w-100">{personalViewList.description}</p>
                    <ModalImgV pl={hItem} display={dis} />
                    <p>Select your Frame/Pillar</p>
                    <Row>
                        {personalViewList.pillers.map((v) =>
                            <Col xl={2} className="p-0">
                                <label
                                    onMouseLeave={() => onHoverOutAction()}
                                    onMouseEnter={() => onHoverAction(v.img)}>
                                    <input
                                        type="radio"
                                        name="test"
                                        value={v.img}
                                        onChange={(e) => setSelectedItem(e.target.value)} />
                                    <Image src={v.img} />
                                    <p>{v.nm}</p>
                                </label>
                            </Col>
                        )}
                    </Row>
                    <Button className=" mt-3 btn btn-primary" disabled={selectedItm ? false : true}>Inquire Now</Button>
                    <div className="mt-4">
                        <label className="fw-bold share">SHARE</label>
                        <label className="ms-3 fb icon-h"><FaFacebookF /></label>
                        <label className="ms-3 insta icon-h"><AiFillInstagram /></label>
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