import styled from 'styled-components'

const Button = styled.button`
 color: red;
 background: green;
 /* font-size: 2rem; */
 font-size: ${props=> (props.big? "3rem": "1rem")};
 padding: 1rem; 
 `

export default Button