import React from 'react'
import AccordionItem from './accordionItem';
import './accordion.css'

const Accordion = () => {
    
    const data = [
        {
            header: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
            header: 'Lorem ipsum dolor sit amet.',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        }
    ]

    return (
        <div className='accordion'>
            {data.map(item => <AccordionItem {...item} />)}
        </div>
    )
}
export default Accordion;