import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyItem = () => {


  const [user] = useAuthState(auth);
  console.log(user);
  const [dress, setDress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myproduct?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setDress(data));
  }, [user]);

  return (
    <div>
      <div className="">
        <div className="container shadow w-75 rounded">
          <table className="table t-head mt-5">
            <thead >
              <tr className="t-head" >
                <th className="t-head">Image</th>
                <th className="">Name</th>
                <th className="t-head">Price</th>
                <th className="t-head">Quantity</th>
                <th className="t-head">Email</th>
              </tr>
            </thead>
            <tbody>

              {dress.map((dress) => {
                console.log(dress.name);
                return (
                  <tr>

                    <img className="table-img" src={dress.image} alt="" />
                    <td className="t-head"> {dress.name}</td>
                    <td>{dress.price}</td>
                    <td>{dress.quantity}</td>
                    <td>{user?.email}</td>

                  </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItem;