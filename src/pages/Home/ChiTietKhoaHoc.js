import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ChiTietKhoaHocAction } from "../../redux/actions/ChiTietKhoaHocAction";

export default function ChiTietKhoaHoc() {
  const dispatch = useDispatch();
  const { makhoahoc } = useParams();

  const chiTietKhoaHoc = useSelector(
    (rootReducer) => rootReducer.ChiTietKhoaHocReducer
  );

  useEffect(() => {
    const action = ChiTietKhoaHocAction(makhoahoc);
    dispatch(action);
  }, []);

  return (
    <div className="container">
      <h1>{chiTietKhoaHoc.tenKhoaHoc}</h1>
      <p>{chiTietKhoaHoc.moTa}</p>
    </div>
  );
}
