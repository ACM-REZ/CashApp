import { Logo } from "@/layout/header/logo/Logo";
import { Navigation } from "./navigation/Navigation";
import { LoginButton } from "./loginButton/LoginButton";

export const Header = () => {
    return (
        <header className="mt-5 flex justify-between items-center border-b-[1px] border-grey pb-[15px]">
            <Logo />
            <div className="flex justify-between items-center max-w-[547px] w-full">
                <Navigation />
                <LoginButton />
            </div>
        </header>
    )
}