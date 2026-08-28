export default function Home(){

    return(
        <div className="flex flex-col bg-gray-300 flex-1">
            <p className="text text-4xl align-text-top self-center my-8 font-black">Generation Thailand<br/> React-Assessment</p>
            <div className="flex  justify-center" >
            <button className="m-4 p-2 bg-white rounded-sm shadow-md hover:shadow transition-shadow">User Home Section</button><button className="m-4 p-2 bg-white rounded-sm shadow-md hover:shadow transition-shadow">Admin Home Section</button>
            </div>
            </div>
    )
}