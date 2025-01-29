import { redirect } from "next/navigation";

export default function MainPage() {
    redirect("/home"); // Redirects '/' to '/home'
    return null;
}
