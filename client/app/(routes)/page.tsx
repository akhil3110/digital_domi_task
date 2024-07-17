import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Navbar from "./_components/navbar";
import HomePage from "./_components/home-page";
import { getCurrentUser } from "@/lib/get-current-user";



export default async function Home() {

  const {userId} = auth()

  if(!userId) {
    return redirect("/sign-in")
  }

  const user = await getCurrentUser();
  

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-10 h-10", 
      userButtonPopoverCard: "bg-blue-100", 
      userButtonPopoverActionButton: "text-red-600",
    },
  };

  const redirectToHistory = () => {
    return redirect("/history")
  }
  

  return (
    <>
      <div className="w-full h-full">
        <div className="m-6">
          <Navbar />
          <div>
            <HomePage 
              firstName={user?.firstName || null}
              userId={userId}
            />
          </div>
        </div>
      </div>
    </>
  );
}
