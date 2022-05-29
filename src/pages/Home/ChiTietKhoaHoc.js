import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ChiTietKhoaHocAction } from "../../redux/actions/ChiTietKhoaHocAction";
import ChiTietKhoaHocItem from "../../templates/HomeTemplate/Layouts/ChiTietKhoaHocItem/ChiTietKhoaHocItem";
import Footer from "../../templates/HomeTemplate/Layouts/Footer/Footer";

export default function ChiTietKhoaHoc() {
  const dispatch = useDispatch();
  const { makhoahoc } = useParams();

  const chiTietKhoaHoc = useSelector(
    (rootReducer) => rootReducer.ChiTietKhoaHocReducer
  );
console.log("chi tiet",chiTietKhoaHoc)
  useEffect(() => {
    const action = ChiTietKhoaHocAction(makhoahoc);
    dispatch(action);
  }, []);

  return (
    <>
      <ChiTietKhoaHocItem chiTietKhoaHoc={chiTietKhoaHoc} />
    </>
  );
}
