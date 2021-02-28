export const Form = (props) => {
    return (
        <form className={props.class}>
            {props.children}
        </form>
    )
}