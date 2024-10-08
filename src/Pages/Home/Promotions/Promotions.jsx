import './Promotions.css';

const Promotions = () => {
    return (
        <div className="promotion-item bg-fixed bg-white text-center items-center pb-20 pt-20 px-40   my-20 ">
            <div className='bg-white '>
                <div className="p-20 ">
                    <h3 className="text-4xl  mb-4">Summer Health Package</h3>
                    <p className='text-xl mb-3'>Get 15% off on full-body checkups this summer!</p>
                    <p className='text-3xl'>Coupon Code: SUMMER15</p>
                </div>
            </div>
        </div>
    );
};

export default Promotions;