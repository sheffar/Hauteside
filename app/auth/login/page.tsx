import { GetUserEmail } from "@/actions/user/GetUserInfo";
import Root from "@/components/auth/login/Root";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const userEmail = await GetUserEmail()
  if(userEmail){
    redirect('/')
  }
  return (
    <div>
      <Root />
    </div>
  )
}
