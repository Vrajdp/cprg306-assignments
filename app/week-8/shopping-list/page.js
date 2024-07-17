import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    router.push("/week-8");
    return null;
  }

  return (
    <div>
      {/* Your shopping list page content */}
    </div>
  );
};

export default ShoppingListPage;
