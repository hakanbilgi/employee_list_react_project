import React from 'react'
import "./Button.css"

const Button = ({ total, page, setPage }) => {
  return (
    <div className="buttons">
      <button onClick={() => {
        page !== 1 && setPage(page - 1)
        page === 1 && setPage(total)
      }} className='prev'>Prev</button>
      <span className='button.span'>{page}</span>
      <button onClick={() => {
        page !== total && setPage(page + 1)
        page === total && setPage(1)
      }} className='next'>Next</button>
    </div>
  )
}

export default Button