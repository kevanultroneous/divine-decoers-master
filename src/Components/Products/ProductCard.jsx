import { Image } from "react-bootstrap"

const ProductCard = (value) => {
  return (
    <div className="col-lg-6 mt-lg-5 mt-xl-4 mt-3 mt-md-4 col-md-5 col-xl-3 ">
      <div className="card p-0 border-0 w-100">
        <Image src={value.image} className="card-img-top" alt="" />
        <div className="card-img-overlay overlay">
          <div className="row">
            <div className="col-6 col-xl-6  col-md-8 col-xs-6 position-absolute bottom-0 mb-2 text-white fw-700">
              {value.name}
            </div>
            <div className="col-6 col-xl-6 col-md-4  position-absolute bottom-0 end-0 text-end  mb-2 text-white fw-700">
              {value.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard