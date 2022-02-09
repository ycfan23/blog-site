import React from 'react'

const SignupForm = () => {


  return (
    <div>
      <form>
        <input type='text' placeholder='Name' />
        <select>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm;
