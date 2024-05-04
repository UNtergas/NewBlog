'use client'
interface FilterErrorProps {
    error: Error

}

export default function ErrorPage({ error }: FilterErrorProps) {
    return (
        <div id="not-found">
            <h1> An error occurred!</h1>
            <p> {error.message}</p>
        </div>
    )
}