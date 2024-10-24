import { useRouteError, Link } from "react-router-dom"


const Error = () => {

  
const error = useRouteError();

if (error.status === 404) {
  return (
    <main className='grid min-h-[100vh] place-items-center px-8 mt-11'>
    <div className="text-center">
      <p className="text-9xl fontsemibold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">Page Not Found</h1>
      <p className="mt-2 text-lg leading-7">Sorry, we couldn't find the page you're looking for.</p>

      <div className="mt-9" >
        <Link to='/' className="btn btn-neutral">
        Go back
        </Link>
        </div>   
      </div> 
     
  </main>
  );
}

  return (
    <main className='grid min-h-[100vh] place-items-center px-8'>
      <h4 className="text-cetner font-bold text-4xl">There was an error....</h4>
      
    </main>
  )
}

export default Error
