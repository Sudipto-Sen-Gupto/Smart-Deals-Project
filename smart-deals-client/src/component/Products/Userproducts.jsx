
import Userproduct from './Userproduct';

const data=fetch('http://localhost:3000/userproducts').then(res=>res.json());
const Userproducts = () => {
   
   
    return (
        <div>
           
           <Userproduct data={data}></Userproduct>
             
        </div>
    );
};

export default Userproducts;