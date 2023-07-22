import {Link as L, NavLink as NL} from 'react-router-dom'
import "./styles.css"

export const Link = ({to, children, className}) => {
  return (
    <>
      <L to={to} className={`${className} link`}>{children}</L>
    </>
  )
}
export const NavLink = ({to, children, className}) => {
  return (
    <>
      <NL to={to}
          className={({isActive}) => isActive ? `${className} link active` : `${className} link`}>{children}</NL>
    </>
  )
}