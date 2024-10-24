
const SubmitBtn = ({text}) => {
  return (
    <button type='submit' 
    className=" btn bg-black text-white hover:bg-white hover:text-black border border-black font-bold py-2 px-4 rounded duration-300 ease-in-out">
    {text}
    </button>
  )
}

export default SubmitBtn;
