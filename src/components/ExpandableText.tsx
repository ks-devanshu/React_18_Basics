import { useState } from "react";

interface expandableTextProps {
    children: String;
    maxChars?: number;
}


function ExpandableText({children, maxChars=100} : expandableTextProps) {

    if(children.length <= maxChars)
        return <p>{children}</p>

    const [isExpanded, setIsExpanded] = useState(false);

    const text = isExpanded ? children : children.substring(0, maxChars);

    return (
        <p>{text}...
        <button onClick={ () => {
            setIsExpanded(!isExpanded);
        } }>{isExpanded ? "Less" : "More"}</button>
        </p>
    );
}

export default ExpandableText;