import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p> The requested resource could not be found</p>
            <Link href="/" className="interactive"> Go back to the homepage</Link>
        </div>
    )
}