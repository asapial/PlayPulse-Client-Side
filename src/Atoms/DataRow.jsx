import React from 'react';
import { Link } from 'react-router';
import Playpulsebutton from './Playpulsebutton';

const DataRow = ({data,sl}) => {
    return (
            <tr>
              <th>
              {sl}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={data.eventImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{data.eventName}</div>
                    <div className="text-sm opacity-50">{data.eventType}</div>
                  </div>
                </div>
              </td>
              <td className=' text-justify'>
              {data.description}
              </td>
              <th>
                <Link to={`/updateEvent/${data._id}`}><Playpulsebutton>Update</Playpulsebutton></Link>
                <Link><Playpulsebutton>Delete</Playpulsebutton></Link>
              </th>
            </tr>

    );
};

export default DataRow;