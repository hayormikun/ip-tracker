
type DetailsProps = {
  ipaddress: string
  location: string
  timezone: string
  isp: string
}

export const Details = ({ipaddress, location, timezone, isp}: DetailsProps) => {
  return (
    <div className="absolute z-[9999] top-[25%] left-[7.5%] bg-white border border-VDarkGray rounded-lg flex flex-col md:flex-row justify-evenly items-center w-10/12 h-40">
      <div className="md:border-r border-DarkGray w-full flex flex-col justify-center items-center">
        <h4 className="uppercase">IP address</h4>
        <span></span>
      </div>
      <div className="md:border-r border-DarkGray w-full flex flex-col justify-center items-center">
        <h4 className="uppercase">Location</h4>
        <span></span>
      </div>
      <div className="md:border-r border-DarkGray w-full flex flex-col justify-center items-center">
        <h4 className="uppercase">Timezone</h4>
        <span></span>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h4 className="uppercase">ISP</h4>
        <span></span>
      </div>
    </div>
  );
};
