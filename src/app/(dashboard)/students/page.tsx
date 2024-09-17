import Announcement from "@/components/Announcement"
import EventCalender from "@/components/EventCalender"
import BigCalendar from "@/components/ReactBigCalendar"


function StudentPage() {
  return (
    <div className=' p-4 flex gap-4 flex-col xl:flex-row '>
      {/*Left*/}
      <div className=" w-full xl:w-2/3 ">
      <div className=" h-full bg-white p-4 rounded-md">
        <h1 className=" font-semibold text-xl">Shedule (4A)</h1>
        <BigCalendar/>
      </div>

      </div>


      {/*Right*/}
      <div className=" w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>


    </div>
  )
}

export default StudentPage
