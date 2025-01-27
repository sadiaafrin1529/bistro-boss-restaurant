import React from 'react'
import MenuItem from '../../Home/Shared/MenuItem/MenuItem'
import Cover from '../../Home/Shared/Cover/Cover'
import { Link } from 'react-router-dom';

function MenuCategory({items,title,description,img}) {
  return (
    <div>
      {title && <Cover title={title} imgae={img} desc={description} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item?._id} item={item} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase mb-8">
            Order Our favourite food
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory