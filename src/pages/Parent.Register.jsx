import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ParentRegister() {

const navigate = useNavigate();

const [formData,setFormData]=useState({
name:"",
email:"",
phone:"",
age:"",
password:"",
confirmPassword:""
});

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit=async(e)=>{
e.preventDefault();

if(formData.password!==formData.confirmPassword){
alert("Passwords do not match");
return;
}

try{

const response=await fetch(
"http://localhost:57489/api/parents/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:formData.name,
email:formData.email,
phone:formData.phone,
age:formData.age,
password:formData.password
})
}
);

const data=await response.json();

if(response.ok){
alert("Parent Registered Successfully");
navigate("/parent-dashboard");
}
else{
alert(data.message);
}

}catch(error){
console.log(error);
alert("Server Error");
}

};

return(
<section className="py-5">
<div className="container">

<h2 className="text-center mb-5">
Parent Registration
</h2>

<form className="row g-3" onSubmit={handleSubmit}>

<div className="col-md-6">
<input
type="text"
name="name"
className="form-control"
placeholder="Parent Name"
onChange={handleChange}
required
/>
</div>

<div className="col-md-6">
<input
type="email"
name="email"
className="form-control"
placeholder="Email"
onChange={handleChange}
required
/>
</div>

<div className="col-md-6">
<input
type="text"
name="phone"
className="form-control"
placeholder="Phone"
onChange={handleChange}
required
/>
</div>

<div className="col-md-6">
<input
type="number"
name="age"
className="form-control"
placeholder="Age"
onChange={handleChange}
required
/>
</div>

<div className="col-md-6">
<input
type="password"
name="password"
className="form-control"
placeholder="Password"
onChange={handleChange}
required
/>
</div>

<div className="col-md-6">
<input
type="password"
name="confirmPassword"
className="form-control"
placeholder="Confirm Password"
onChange={handleChange}
required
/>
</div>

<div className="text-center mt-4">
<button className="btn btn-warning px-5">
Register Parent
</button>
</div>

</form>

</div>
</section>
);

}

export default ParentRegister;