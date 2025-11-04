import { use } from "react";
import Productui from "./Productui";

const Userproduct = ({data}) => {
    const products=use(data);
    console.log(products);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                products.map(product=><Productui key={product._id} product={product}></Productui>)
            }
        </div>
    );
};

export default Userproduct;