const Input1 = () => {
    return (
        <div className="form-input">
            <label>
                <input type="text" name="name" placeholder="Username" required />
            </label>
        </div>
    )
}
export default Input1;

const Input2 = () => {
    return (
        <div className="form-input">
            <label>
                <input type="email" name="email" placeholder="Email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required />
            </label>
        </div>
    )
}
export default Input2;

const Input3 = () => {
    return (
        <div className="form-input">
            <label>
                <input type="password" name="password" placeholder="Password" minlength="8" required />
            </label>
        </div>
    )
}
export default Input3;
