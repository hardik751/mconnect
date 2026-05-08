import React, { useState } from "react";

function CreateTest() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: 0 },
  ]);

  // Add new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: 0 },
    ]);
  };

  // Handle question change
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  // Handle option change
  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  // Handle correct answer
  const handleCorrect = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correct = value;
    setQuestions(updated);
  };

  // Save test
  const handleSave = () => {
    const test = { title, questions };
    console.log("Test Created:", test);

    alert("Test Created (check console)");
  };

  return (
    <div className="container mt-5">
      <h2>Create Test</h2>

      <input
        type="text"
        placeholder="Test Title"
        className="form-control mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {questions.map((q, i) => (
        <div key={i} className="card p-3 mb-3">
          <h5>Question {i + 1}</h5>

          <input
            type="text"
            placeholder="Enter question"
            className="form-control mb-2"
            value={q.question}
            onChange={(e) => handleQuestionChange(i, e.target.value)}
          />

          {q.options.map((opt, j) => (
            <input
              key={j}
              type="text"
              placeholder={`Option ${j + 1}`}
              className="form-control mb-1"
              value={opt}
              onChange={(e) =>
                handleOptionChange(i, j, e.target.value)
              }
            />
          ))}

          <select
            className="form-control mt-2"
            value={q.correct}
            onChange={(e) => handleCorrect(i, Number(e.target.value))}
          >
            <option value={0}>Correct: Option 1</option>
            <option value={1}>Correct: Option 2</option>
            <option value={2}>Correct: Option 3</option>
            <option value={3}>Correct: Option 4</option>
          </select>
        </div>
      ))}

      <button className="btn btn-secondary me-2" onClick={addQuestion}>
        Add Question
      </button>

      <button className="btn btn-primary" onClick={handleSave}>
        Save Test
      </button>
    </div>
  );
}

export default CreateTest;