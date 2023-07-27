import { useState } from "react";

type SearchBarType = {
  ipaddress: string;
};

export const SearchBar = ({ ipaddress }: SearchBarType) => {
  const [ip, setip] = useState<string>("");

  const postIp = (e: any) => {
    e.preventDefault();

    const getIPAdress = async (ip: any)=>{
      const result = await fetch(`${process.env.BaseUrl}apiKey=${process.env.API_KEY}ipAddress=${ip}`)
      const data = await result.json()
      return data
    }
    
    getIPAdress(ip)
  };

  return (
    <form>
      <div className="flex flex-row justify-center items-center my-8 w-full">
        <input
          type="search"
          placeholder="Search for any IP address or domain"
          className="w-fit h-full"
          onChange={(e) => setip(ipaddress)}
          value={ip}
        />
        <label className="bg-VDarkGray w-4 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </label>
      </div>
    </form>
  );
};
