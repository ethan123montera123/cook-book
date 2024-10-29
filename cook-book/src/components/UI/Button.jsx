const Button = ({ name, className, dest, onClick}) => {
  return (
    <form action={dest}>
        <button type="submit" className={className} onClick={onClick}>{name}</button>
    </form>
  )
}

export default Button