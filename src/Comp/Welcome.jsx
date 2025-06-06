import { BsIncognito } from 'react-icons/bs';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Welcome = () => {
    return (
        <div className='h-screen pt-44'>
            <div className="w-full max-w-md mx-auto"> {/* Added container */}
                <DotLottieReact
                    src="https://lottie.host/163ed8b6-774d-4dd4-a96e-963822f6c2de/yDtoyj7OEn.lottie"
                    loop
                    autoplay
                />
            </div>
            <p className="text-4xl text-center flex justify-center items-center gap-2 -mb-20">
                Admin Site
            </p>
        </div>
    );
};

export default Welcome;