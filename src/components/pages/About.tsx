import React from "react";

 function About(){
    const data = [
        {
            "image":"https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80",
            "title":"My  2"
        },
        {
            "image":"https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80",
            "title":"My arts 1"
        },
        {
            "image":"https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80",
            "title":"My  2"
        },
        {
            "image":"https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80",
            "title":"My arts 3"
        },
        {
            "image":"https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80",
            "title":"My arts"
        }
    ]
    return(<>
   

    <div className=" max-w-6xl mx-auto">

        <h1 className="text-center ">Welcome</h1>
        <form className="mt-4  flex mx-1">
            <input type="text" className="border p-3 w-4/5 md:w-1/2 lg:w-1/2 inline-block  focus:outline-none " placeholder="Search by Title" />
            <button className="bg-blue-300 p-3  w-1/5 text-white font-bold rounded-r-2xl">Search</button>

        </form>

        {/* Gridding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 mx-2" >
           {data.map((items,index)=>{
               return(<div className="p-3 bg-gray-200 rounded" key={index}>
               
               <img  className="w-full" alt="" src={items.image}/>
               <p>{items.title}</p>
           </div>)
           })}
            
           

        </div>

        {/* End Grid */}


        {/* Flex */}

        {/* end Flex */}

    </div>

    </>)
}
export default About;

