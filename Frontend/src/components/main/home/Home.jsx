import './home.css'

export default function Home () {
  const price = 234234
  return (
    <section className='home'>
      <div className='products-container'>
        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro ffff ffffffffffffffffffffffffffffffffff</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>
      </div>
    </section>
  )
}
