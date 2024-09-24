export default function Category({ params }: { params: { category: string } }) {
    return (
        <h1>Hola {params.category}</h1>
    )
}