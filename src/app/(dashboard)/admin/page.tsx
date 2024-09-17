import Announcement from "@/components/Announcement";
import AttendingChart from "@/components/AttendingChart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalender";
import FinnanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className=' p-4 flex gap-4 flex-col md:flex-row '>
      {/*Left*/}
      <div className=" w-full lg:w-2/3 flex flex-col  gap-8">
        {/*UserCard*/}

        <div className=" flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/*MiddleChart*/}
        <div className=" flex gap-4 flex-col lg:flex-row">
            {/*CountChart*/}

         <div className="w-full  h-[450px] lg:w-1/3 ">
         <CountChart/>
         </div>

          {/*AttendingChart*/}
          <div className=" w-full  lg:w-2/3  h-[450px]">
          <AttendingChart/>
          </div>

        </div>

        {/*BottomChart*/}
        <div className="w-full h-[500px]">
          <FinnanceChart/>
        </div>

      </div>
      {/*Right*/}
      <div className=" w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalender/>
      <Announcement/>
      </div>

    </div>
  );
}

export default AdminPage
