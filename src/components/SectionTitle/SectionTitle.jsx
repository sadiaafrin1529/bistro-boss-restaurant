import React from 'react'

function SectionTitle({subheading,heading}) {
  return (
    <div className='md:w-3/12 mx-auto text-center my-8'>
      <p className="text-yellow-600 mb-2">---{subheading}---</p>
      <h3 className="uppercase text-3xl border-y-4 py-4">{heading}</h3>
    </div>
  );
}

export default SectionTitle