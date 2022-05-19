import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Success = () =>{

    const navigate = useNavigate();
    function handlePayment(){
        for(let i=1;i<50;i++){
            axios.delete(`http://localhost:2100/cart/${i}`)
        }
        navigate("/")
    }
    return (
        
        

        <div className="sucess_box">
            {/* <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> */}
            <div>

            
           
            <img className="sucess_image" src="https://magecomp.com/blog/wp-content/uploads/2017/10/How-to-Send-Order-Confirmation-Email-to-Customers-after-Successful-Payment-in-Magento-2-1024x332.png" alt="" />

            <h1>Your Order Place Successfully!!</h1>
            <button className="sucess_payment" onClick={() =>handlePayment()
        }>Shop More</button>
            </div>
        </div>


    );
}