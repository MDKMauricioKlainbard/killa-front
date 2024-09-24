export default function ErrorForm({ error }: { error: string | undefined }) {
    return (
        <label htmlFor="error-form">{error}</label>
    )
}