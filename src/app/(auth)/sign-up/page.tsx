import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";

async function SignUp() {

    const user = await getCurrent();

    if(user) redirect("/");

    return (  
        <div>
            <SignUpCard />
        </div>
    );
}

export default SignUp;