import { useState, useEffect } from "react"


// Async Await method with using React Hook useEffect()
function App() {

  let arr = []
  const [data, setData] = useState(arr) // useState() are takeing two perametter

  useEffect(()=>{
     
      async function DataFetch(){
        //console.log(import.meta.env.VITE_API_URL)
  
        try {
          let response = await fetch(`${import.meta.env.VITE_API_URL}`); // coll api
        

          if (!response.ok) {
            throw new Error('Network response not ok.');
          }
          const result = await response.json(); // convert to json
          console.log(result) // array
          setData(result);    // setData into useState

        } catch (error) {
          console.error('Error fetching data', error); 
        } 

    }
    DataFetch()

  }, [])

  return (
    <div className="container">
      <h1>Showing data using (Map) and Immediately Invoked function</h1>
      <h1>Async await method with React Hook useEffect()</h1>
      {

        // use map() to showing value

        (() => {
          return data.map((value, index) => (
            <div key={index}>
              <div>
                Serial= {index + 1}
                <p><b>Full Name:</b> {value.fullName}</p>
                <p><b>Email:</b> {value.email}</p>
                <p><b>Phone Number:</b> {value.phoneNumber}</p>
              </div>
            </div>
          ));
        })()



        // use for loop to showing value

        // (() => {
        //   const elements = [];
          
        //   for (let index = 0; index < data.length; index++) {

        //     const value = data[index];
            
        //     elements.push(
        //       <div key={index}>
        //         <div>
        //           <p>{value.fullName}</p>
        //           <p>Email: {value.email}</p>
        //           <p>Phone Number: {value.phoneNumber}</p>
        //           <p>Created Date: {value.createdDate}</p>
        //           <p>Modify Date: {value.modifyDate}</p>
        //         </div>
        //       </div>
        //     );
        //   }
  
        //   return elements;
        // })()

      }
    </div>
  );
}

export default App
