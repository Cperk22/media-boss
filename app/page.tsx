import { redirect } from 'next/navigation';

export default function MainPage() {
    if (typeof window === 'undefined') {
        redirect('/home');
    }
    return null;
}