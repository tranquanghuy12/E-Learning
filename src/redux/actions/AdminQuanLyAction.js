import React from 'react'
import { createAction } from '.'
import { API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG, http } from '../../util/setting/config'
import { LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG, LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA } from '../types/QuanLyNguoiDungType'

export const layDanhSachNguoiDungPhanTrang = (param) => {
  return async dispatch => {
      try {
          let result = await http.get(`${API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG}${param}`)
          dispatch(createAction(LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,result.data))
          dispatch(createAction(LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_DATA,result.data.items))
          
      } catch (error) {
          console.log(error.response?.data);
      }
  }
}

