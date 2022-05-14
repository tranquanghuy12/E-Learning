import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h2 className="display-4">
          <Link to="/admin/quanlynguoidung">Quản lý người dùng</Link>
        </h2>
      </div>
      <div className="col-sm-12 col-md-6">
        <h2>Quản lý khoá học</h2>
      </div>
    </div>
  );
}
