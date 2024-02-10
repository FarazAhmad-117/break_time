import React from 'react'
import Icon from '../img/loading.gif'

function Loader() {
    return (
        <div className='flex w-full justify-center align-middle min-h-9'>
            <img src={Icon} alt="Loading..." />
        </div>
    )
}

export default Loader