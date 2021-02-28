export const Input = (props) => {
    return (
        <div className="form-input">
            <label>
                <input type={props.type} name={props.name} placeholder={props.placeholder} {...props.attributes} />
            </label>
        </div>
    )
}
