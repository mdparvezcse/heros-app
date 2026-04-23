import React from 'react';

const InstalledAppCard = ({ appData, handleUninstallBtn}) => {
    const {id, image, size, title, downloads, ratingAvg } = appData;
    
    return (
        <div className='flex justify-between items-center rounded shadow-md p-1 md:p-2 mb-5 bg-white'>

            <div className='gap-4 md:gap-6 flex items-center'>
                <img className='w-15 h-15 md:w-20 md:h-20' src={image} alt="" />
                <div>
                    <h1 className='font-bold'>{title}</h1>
                    <div className='flex gap-3 md:gap-5'>
                        <p>{downloads}</p>
                        <p>{ratingAvg}</p>
                        <p>{size}</p>
                    </div>
                </div>
            </div>

            <button onClick={()=> handleUninstallBtn(id)} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font font-semibold'>Uninstall</button>

        </div>
    );
};

export default InstalledAppCard;