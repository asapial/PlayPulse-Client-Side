import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../main";
import DataRow from "../../Atoms/DataRow";

const ManageEventsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!loading) {
      fetch(`http://localhost:3000/myEvents?email=${user.email}`)
        .then((res) => res.json())
        .then((fetchData) => setData(fetchData));

        
    }
  }, [loading]);

  console.log(user);
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              Sl
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((items,index)=><DataRow data={items} key={index} sl={index+1}></DataRow>)
            }
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageEventsPage;
