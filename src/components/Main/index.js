import React from 'react'

import {Main as Container} from './style'

function Main({children, isBlur}){
    console.log(isBlur)
    return <Container isBlur={isBlur}>{children}</Container>
}

export default Main