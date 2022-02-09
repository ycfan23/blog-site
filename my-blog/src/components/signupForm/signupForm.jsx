import React, { useState } from 'react'

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const FormTitles = ['Sign Up', 'Personal Info', 'Other']

  return (
    <div>
      <form>
        <input type='text' placeholder='Name' />
        <select>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <div>
          {FormTitles[page]}
        </div>
        <button
          type='button'
          onClick={()=> {
            setPage(currentPage => currentPage - 1)
          }}
        >Prev</button>
        <button
          type='button'
          disabled={page === FormTitles.length - 1}
          onClick={()=> {
          setPage(currentPage => currentPage + 1)
        }}>
          Next
        </button>
      </form>
    </div>
  )
}

export default SignupForm;
