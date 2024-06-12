import './style.css'

const CheckIn = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 checkInPage'>
      <div className='p-3 rounded w-25 border checkInForm'>
        <h2>Popcorn</h2>
        <h4>*insert gambar popcorn monyok kena masuk kerja</h4>
        <form>
          <div>
            <label htmlFor="employeeId"></label>
            <input type="text" name="employeeId" autoComplete="off" placeholder="Enter Employee ID" className='form-control rounded-0' />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Password" className='form-control rounded-0' />
          </div>
          <button className='btn btn-success w-100 rounded-0'>Check In</button>
        </form>
      </div>
    </div>
  )
}

export default CheckIn


// nanti replace all bootstrap components with tailwindcss