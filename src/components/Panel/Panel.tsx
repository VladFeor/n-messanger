import '../styles/panel.css'
export default function Panel() {
  return (
    <main>
      <div className="box-shadow w-[350px] h-screen bg-[#3A3A3A]  fixed">
        <div className="box-shadow w-full h-[315px] pt-[35px] pb-[35px] flex flex-col z-10">
          <div className="w-[142px] h-[142px]  rounded-[50px] bg-white inline mx-auto mb-[35px]" ></div>
          <div className="text-4xl text-center w-full">FingerBreacker</div>
        </div>
        <div className="box-shadow w-full h-[105px] p-5 flex ease-in-out duration-300 hover:bg-[#444444] cursor-pointer" >
          <div className="w-[65px] h-[65px]  rounded-[20px] bg-white" ></div>
          <div className="ml-7">
            <div className="text-2xl mb-2">Slavers</div>
            <div className="text-1xl  w-[215px] text-[#AEAEAE] truncate">TextMessange TextMessange TextMessange</div>
          </div>
        </div>
        <div className="box-shadow w-full h-[105px] p-5 flex ease-in-out duration-300 hover:bg-[#444444] cursor-pointer" >
          <div className="w-[65px] h-[65px]  rounded-[20px] bg-white" ></div>
          <div className="ml-7">
            <div className="text-2xl mb-2">Slavers</div>
            <div className="text-1xl  w-[215px] text-[#AEAEAE] truncate">TextMessange TextMessange TextMessange</div>
          </div>
        </div>
        <div className="box-shadow w-full h-[105px] p-5 flex ease-in-out duration-300 hover:bg-[#444444] cursor-pointer" >
          <div className="w-[65px] h-[65px]  rounded-[20px] bg-white" ></div>
          <div className="ml-7">
            <div className="text-2xl mb-2">Slavers</div>
            <div className="text-1xl  w-[215px] text-[#AEAEAE] truncate">TextMessange TextMessange TextMessange</div>
          </div>
        </div>
      </div>
      
    </main>
  )
}
