import Parameter from "@/components/ui/Parameter/Parameter";
import Header from "@/components/ui/Header";
import Body from "@/components/ui/Body";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#0e1117] font-mono px-4">
      <div className="max-w-screen-md w-full border-[0.15px] border-gray-700 my-20">
        <Header />
        <Body />
        <Parameter />
      </div>
    </main>
  );
}
