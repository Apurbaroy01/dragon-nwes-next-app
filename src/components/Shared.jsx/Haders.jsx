import Image from 'next/image';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Haders = () => {
    return (
        <div className='text-center p-8 space-y-2'>
            <Image src={logo} alt="Logo" width={300} height={200} className='mx-auto' />
            <p>this is the headers</p>
            <p>{format(new Date(), "EEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Haders;