import React,{useEffect,useState} from "react";

function StudentTest(){

const [test,setTest]=useState(null);
const [answers,setAnswers]=useState([]);

useEffect(()=>{

fetch("http://localhost:57489/api/tests")
.then(res=>res.json())
.then(data=>{
if(data.length>0){
setTest(data[0]);
setAnswers(
new Array(data[0].questions.length).fill(null)
);
}
});

},[]);


const handleAnswer=(qIndex,val)=>{
let updated=[...answers];
updated[qIndex]=val;
setAnswers(updated);
};


const handleSubmit=async()=>{

let score=0;

test.questions.forEach((q,i)=>{
if(answers[i]===q.correctAnswer){
score++;
}
});

await fetch(
"http://localhost:57489/api/results/submit",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
userType:"student",
userName:"Student User",
testId:test._id,
answers,
score
})
}
);

alert(`Submitted Score ${score}/${test.questions.length}`);

};


if(!test) return <h3>Loading Test...</h3>;

return(
<div className="container mt-5">

<h2>{test.title}</h2>

{test.questions.map((q,i)=>(

<div className="card p-4 mb-4" key={i}>

<h5>
Q{i+1}. {q.question}
</h5>

{q.options.map((opt,j)=>(

<div key={j}>
<input
type="radio"
name={`q${i}`}
onChange={()=>handleAnswer(i,j)}
/>
{opt}
</div>

))}

</div>

))}

<button
className="btn btn-success"
onClick={handleSubmit}
>
Submit Test
</button>

</div>
)

}

export default StudentTest;