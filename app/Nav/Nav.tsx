import { GetTotalCartSumAndQty } from "@/actions/cart/GetTotalCartSumAndQty";
import { GetUserColor, GetUserFullname, GetUserId } from "@/actions/user/GetUserInfo";
import Root from "../../components/nav/Root";

export default async function Nav() {
  const userId = await GetUserId();
  const sumQty = await GetTotalCartSumAndQty();
  const fullname = await GetUserFullname()
  const color = await GetUserColor()

  return (
    <div className="">
      <Root sumQty={sumQty} color={color} fullname={fullname} userId={userId} />
    </div>
  );
}
