import React, {useState, useEffect, useRef} from 'react';
import './accordionItem.css';

const AccordionItem = ({header, body}) => {

    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0)

    const handleActive = () => {
        setActive(!active);
    }

    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            if (active) setHeight(bodyRef.current.scrollHeight);
            else setHeight(0); 
        }

    },[active, bodyRef])

    return (
        <div className="accordion-item">
            <div className={active ? "accordion-item-header active" : "accordion-item-header"} onClick={handleActive}>
                {header}
            </div>
            <div className="accordion-item-body" ref={bodyRef} style={{maxHeight:`${height}px`}}>
                <div className="accordion-item-body-content">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;