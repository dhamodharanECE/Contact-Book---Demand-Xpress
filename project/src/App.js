// import './App.css';
// import { useState } from 'react';
// import React from 'react'

// const App = () => {
//      const [data, setdata] = useState(
//     {
//       name: '',
//       email: '',
//       phone: ''
//     }
//   )
  
//   // Form vailedation

//    function VailedEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   }

//   const ValidPhoneNumber = (phonenumber) => {
//     return /^\d{10}$/.test(phonenumber);
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!VailedEmail(data.email)) {
//       alert('Invalid email');
//       return;
//     }
//     if (!ValidPhoneNumber(data.phone)) {
//       alert('Phone must be 10 digits');
//       return;
//     }
//     console.log(data);
//     setdata({ name: '', email: '', phone: '' })
//   }

//   return (
//     <>
//       <div className="form">
//         <div className="tittle">
//           <h1>Contact Book</h1>
//         </div>
//         <div className="form-input">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Name :</label>
//               <input type="text" placeholder="Enter your name" value={data.name} onChange={(e) => setdata({ ...data, name: e.target.value })} required />
//             </div>
//               <label>Email :</label>
//               <input type="email" placeholder="Enter your email" value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} required />
//             <div>
//               <label>Phone :</label>
//               <input type="number" placeholder="Enter your phone number" value={data.phone} onChange={(e) => setdata({ ...data, phone: e.target.value })} required />
//             </div>
//             <div>
//               <button type="submit">Submit</button>
//               <button onClick={() => setdata({ name: '', email: '', phone: '' })}>Delete</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;
