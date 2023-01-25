import './styles.css'



export const Modal = ({onSubmit,onChange,value}) => {
    return (
        <div className='modal-wrapper'>
            <div className='modal-container'>
                <p>Agregar nickName para que el resto de lo participantes sepan quien sos</p>
                <form className='modal-form' onSubmit={() => onSubmit(false)}>
                    <input className='modal-input'
                        onChange={e => onChange(e.target.value)} type="text" value={value} placeholder="Cual es tu apodo?"
                        required />
                    <button type="submit" className='modal-button' onSubmit={() => onSubmit(false)}>ACEPTAR</button>
                </form>
            </div>
        </div>
    )
}