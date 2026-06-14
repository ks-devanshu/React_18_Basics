interface AlertProp{
    children: String;
}

function Alert({children} : AlertProp) {
    return <div className="alert alert-primary" role="alert">{children}</div>
}

export default Alert;