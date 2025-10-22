export default function counterButton({title, handleClick}) {
    return(
        <button 
        onClick={handleClick}
      style={{
        margin: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
      }}>
      {title}
      </button>
      
    )
}