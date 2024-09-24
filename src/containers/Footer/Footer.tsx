import style from './style.module.scss'

export default function Footer() {
    return (
        <footer>
            <div>
                <div><h2>Contáctanos</h2></div>
                <div>
                    <span>Teléfono</span> <label>+54 9 1136202042</label>
                    <span>Dirección</span> <label>Av. Corrientes 3189 - Abasto</label>
                </div>
            </div>

            <div>
                <div><h2>Tienda</h2></div>
                <div>
                    <span>Mi cuenta</span>
                    <span>Mi bolsa</span>
                    <span>Historial de compras</span>
                    <span>Favoritos</span>
                </div>
            </div>

            <div>
                <div><h2>Ayuda</h2></div>
                <div>
                    <span>Estado de mi pedido</span>
                    <span>Preguntas frecuentes</span>
                    <span>Devoluciones</span>
                </div>
            </div>

            <div>
                <h2>Información</h2>
            </div>
            <div>
                <span>Política de privacidad</span>
                <span>Política de cookies</span>
                <span>Términos y condiciones</span>
                <span>Métodos de pago</span>
            </div>
        </footer>
    )
}