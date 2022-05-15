import React from "react";

export default function GhiDanh({ nguoiDung }) {
  console.log("tai khoản user", nguoiDung.taiKhoan);
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Tutorials
        </button>
        <ul className="dropdown-menu">
          {/* {nguoiDung.map((user, index) => {
          return <li key={index}>{user.taiKhoan}</li>;
        })} */}
        </ul>
        <hr />
        <div className="row">
            <div className="col-6">
                <h5>Học viên chờ xác thực</h5>
            </div>
            <div className="col-6">
                <input type="text" placeholder="Nhập tên học viên" />
            </div>
        </div>
      </div>
    </>
  );
}
