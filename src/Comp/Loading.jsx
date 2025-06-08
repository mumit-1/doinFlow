import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen text-xl font-medium'>
                <DotLottieReact
      src="https://lottie.host/8bf716e9-78f1-4f8a-92b9-e8a918865a98/kDRSaydOcT.lottie"
      loop
      autoplay
    />
        </div>
    );
};

export default Loading;