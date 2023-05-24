import './styles.css'

const Presentacion = () => {
    return (
        <div className='relative'>
            <img className="presentation-img w-full object-cover object-top" src="/images/principal.webp" alt='Foto principal de presentacion pizzeria junkal irun' />
            <div className="w-full h-60 presentation-shadow absolute bottom-0">
            </div>
        </div>

    )
}

export default Presentacion