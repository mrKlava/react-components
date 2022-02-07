import React, {useState, useEffect} from 'react';

import './hamburger.scss';

function Hamburger(props) {
    
    const [toggleHam, setToggleHam] = useState(false)

    console.log (`This is Hamurger: ${toggleHam}`)

    console.log(props.updateHam)

    useEffect(() => {
        if (props.onChange) {
            props.onChange(toggleHam)
        }

        if (props.updateHam) {
            setToggleHam(false)
            console.log('clicked link')
        }

    }, [toggleHam])

    return (
        <div    className='hamburger'
                className={ !toggleHam ? 'hamburger' : 'hamburger active' }
                onClick={ ()=>setToggleHam(!toggleHam) }
                onChange={setToggleHam}
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;
