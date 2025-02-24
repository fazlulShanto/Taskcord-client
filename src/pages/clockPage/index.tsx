import ClockFace from "@/components/common/clockFace";

const userTimeZones = [
  { memberName: "Sehrik", timezone: "Asia/Dhaka" },
  { memberName: "Mutsah", timezone: "Africa/Johannesburg" },
  { memberName: "Skyler", timezone: "America/Los_Angeles" },
];
function ClockFacePage() {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-12 space-y-8 md:space-y-0 items-center justify-center bg-gray-900 min-h-screen">
      {userTimeZones.map((timeZone, index) => (
        <div
          key={index}
          className="bg-gray-800 py-6 px-8 rounded-3xl shadow-lg"
        >
          <ClockFace
            currentTimeZone={timeZone.timezone}
            memberName={timeZone.memberName}
          />
        </div>
      ))}
    </div>
  );
}

export default ClockFacePage;
