// import "./checkout.css"
import { useNavigate } from 'react-router-dom';
export const CheckOut = () =>{
  const navigate = useNavigate()
const handlesubmit=(e)=>{
 
    alert("Payment successful ")
    navigate("/Success")
}

  
    return(<>
     <div class="mainscreen">
      <div class="card">
        <div class="leftside">
          <img
            src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form onSubmit={handlesubmit}>
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" class="button"
            // onClick={()=>{
            //   navigate("/Success")
            //   alert("Payment successful ")
            //    }}
                >CheckOut</button>
          </form>
        </div>
      </div>
    </div>
    </>

    )
}