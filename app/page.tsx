

import Parameter from "@/components/ui/Parameter/Parameter";
import Header from "@/components/ui/Header";
import Body from "@/components/ui/Body";

export default function Home() {

  
  return (
    <main className="bg-[#0e1117]">
      <div className=" items-center justify-between p-2">
      <Header/>
      </div>
      <div>
        <Body/>
      </div>
      <div className=" items-center justify-between p-24">
      <Parameter/>
      </div>
    </main>
  );
}
