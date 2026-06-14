
interface ButtonProps{
    children: String;
    color?: "primary"|"danger"|"secondary"|"success"|"warning"|"info"|"light"|"dark"|"link";
    onClick: () => void;
}

function Button({children, color="warning", onClick}: ButtonProps) {

    return (
        <button type="button" className={"btn "+"btn-"+color} onClick={() => {onClick()}}>{children}</button>
    )
}

export default Button;