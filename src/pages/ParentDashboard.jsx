import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";

function ParentDashboard(){

const navigate=useNavigate();

const [meetings,setMeetings]=useState([]);
const [tests,setTests]=useState([]);

useEffect(()=>{

fetch("http://localhost:57489/api/meetings")
.then(res=>res.json())
.then(data=>setMeetings(data));

fetch("http://localhost:57489/api/tests")
.then(res=>res.json())
.then(data=>setTests(data));

},[]);


return(
<div className="container mt-5">

<h1 className="text-center mb-5">
Parent Dashboard
</h1>

<div className="row mb-5">

<div className="col-md-4">
<div className="card p-4 shadow text-center">
<h4>Take Test</h4>

<button
className="btn btn-primary"
onClick={()=>navigate(`/attempt-test/${tests[0]?._id}`)}
>
Start Test
</button>

</div>
</div>

<div className="col-md-4">
<div className="card p-4 shadow text-center">
<h4>Results</h4>

<button
className="btn btn-success"
onClick={()=>navigate("/results")}
>
View Results
</button>

</div>
</div>

<div className="col-md-4">
<div className="card p-4 shadow text-center">
<h4>Meetings</h4>

<button
className="btn btn-warning"
onClick={()=>navigate("/meetings")}
>
View Meetings
</button>

</div>
</div>

</div>


<div className="card p-4 shadow">

<h3>Available Tests</h3>

<div className="row mt-4">

{tests.map((test)=>(
<div className="col-md-4 mb-3" key={test._id}>

<div className="card border p-3">

<h5>{test.title}</h5>

<button
className="btn btn-outline-primary mt-3"
onClick={()=>navigate(`/attempt-test/${test._id}`)}
>
Attempt Test
</button>

</div>

</div>
))}

</div>

</div>

</div>
);

}

export default ParentDashboard;