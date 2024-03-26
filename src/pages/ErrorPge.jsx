import error from '../assets/404.jpg'

const ErrorPge = () => {
    return (
        <div className="text-center mt-28">
            {/* <h1 className="text-6xl font-bold">404 not found</h1> */}
            <img src={error} className='mx-auto w-[50%]' alt="" />
        </div>
    );
};

export default ErrorPge;