import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";

function ParentTest(){

const {id}=useParams();

const [test,setTest]=useState(null);
const [answers,setAnswers]=useState([]);

useEffect(()=>{

fetch(`http://localhost:57489/api/tests/${id}`)
.then(res=>res.json())
.then(data=>setTest(data));

},[id]);


const handleAnswer=(qIndex,optIndex)=>{
const updated=[...answers];
updated[qIndex]=optIndex;
setAnswers(updated);
};

const submitTest=async()=>{

let score=0;

test.questions.forEach((q,i)=>{
if(answers[i]===q.correct){
score++;
}
});

await fetch(
"http://localhost:57489/api/results",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
userType:"parent",
testId:test._id,
score,
total:test.questions.length
})
}
);

alert(
`Score ${score}/${test.questions.length}`
);

};

if(!test){
return <h3>Loading...</h3>
}

return(
<div className="container mt-5">

<h2 className="mb-4">
{test.title}
</h2>

{test.questions.map((q,i)=>(

<div className="card p-4 mb-4" key={i}>

<h5>
{i+1}. {q.question}
</h5>

{q.options.map((opt,j)=>(

<div key={j}>
<input
type="radio"
name={`q${i}`}
onChange={()=>handleAnswer(i,j)}
/>

{" "}
{opt}

</div>

))}

</div>

))}

<button
className="btn btn-success"
onClick={submitTest}
>
Submit Test
</button>

</div>
);

}

export default ParentTest;