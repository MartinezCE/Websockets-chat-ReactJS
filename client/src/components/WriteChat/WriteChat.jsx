import './styles.css'


export const WriteChat = ({ onSubmit, value, onChange }) => {
    return (
        <div className='write-wrapper'>
            <form className='write-form' onSubmit={onSubmit}>
                <textarea type='text' rows="2" cols="82" onChange={e => onChange(e.target.value)}
                    placeholder="Escribe un mensaje para el grupo" value={value} required />
                <button type="submit" className='write-button'
                    onSubmit={onSubmit}>Enviar
                </button>
            </form>
        </div>
    )
}