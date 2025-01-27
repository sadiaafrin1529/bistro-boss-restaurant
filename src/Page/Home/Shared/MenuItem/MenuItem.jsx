import React from 'react'

function MenuItem({ item }) {
    
    return (
      <div className="flex space-x-2 ">
        <div>
          <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-[100px]' src={item.image} alt="" />
        </div>
        <div>
          <h3 className="uppercase">{item?.name} ----------</h3>
          <p>{item?.recipe}</p>
        </div>
        <div>
          <p className='text-yellow-600'>${item?.price}</p>
        </div>
      </div>
    );
}

export default MenuItem