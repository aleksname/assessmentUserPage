// // pages/admin.js
// import { useState } from "react";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";

// const Admin = () => {
//   const [title, setTitle] = useState("");
//   const [questions, setQuestions] = useState([{ question: "", answers: ["", "", "", ""], correct: 0 }]);

//   const handleQuestionChange = (index, field, value) => {
//     const newQuestions = [...questions];
//     newQuestions[index][field] = value;
//     setQuestions(newQuestions);
//   };

//   const addQuestion = () => {
//     setQuestions([...questions, { question: "", answers: ["", "", "", ""], correct: 0 }]);
//   };

//   const saveQuiz = async () => {
//     try {
//       const docRef = await addDoc(collection(db, "quizzes"), {
//         title,
//         questions
//       });
//       alert("Quiz created with ID: " + docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Quiz</h1>
//       <input
//         type="text"
//         placeholder="Quiz Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       {questions.map((q, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder={`Question ${index + 1}`}
//             value={q.question}
//             onChange={(e) => handleQuestionChange(index, "question", e.target.value)}
//           />
//           {q.answers.map((a, i) => (
//             <input
//               key={i}
//               type="text"
//               placeholder={`Answer ${i + 1}`}
//               value={a}
//               onChange={(e) => {
//                 const newAnswers = [...q.answers];
//                 newAnswers[i] = e.target.value;
//                 handleQuestionChange(index, "answers", newAnswers);
//               }}
//             />
//           ))}
//           <select
//             value={q.correct}
//             onChange={(e) => handleQuestionChange(index, "correct", e.target.value)}
//           >
//             <option value={0}>Answer 1</option>
//             <option value={1}>Answer 2</option>
//             <option value={2}>Answer 3</option>
//             <option value={3}>Answer 4</option>
//           </select>
//         </div>
//       ))}
//       <button onClick={addQuestion}>Add Question</button>
//       <button onClick={saveQuiz}>Save Quiz</button>
//     </div>
//   );
// };

// export default Admin;
