import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";

async function SignIn() {

    const user = await getCurrent();

    if(user) redirect("/");

    return (  
        <div>
            <SignInCard />
        </div>
    );
}

export default SignIn;