import React, { Component, useRef, useState } from "react";
import { Table, Input, Button, Space, Rate } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { huyGhiDanhKhoaHoc } from "../../redux/actions/ThongTinNguoiDungAction";
// import "./Profile.scss";

const DanhSachKhoaHocDaDangKy = ({ userProfile }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ searchText: "", searchedColumn: "" });
  const searchInput = useRef(null);
  const data = userProfile.chiTietKhoaHocGhiDanh || "";
  // console.log('data',data)
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(
          () =>
            searchInput && searchInput.current && searchInput.current.select()
        );
      }
    },
    render: (text) =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setState({ searchText: "" });
  };

  const columns = [
    {
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
      width: "10%",
      ...getColumnSearchProps("maKhoaHoc"),
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
      width: "15%",
      ...getColumnSearchProps("tenKhoaHoc"),
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (hinhAnh) => <img width={100} src={hinhAnh} alt="Hình ảnh" />,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      width: "30%",
      render: (text, khoaHoc) => {
        return khoaHoc.moTa.length > 20
          ? khoaHoc.moTa.substring(0, 70) + "..."
          : khoaHoc.moTa;
      },
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      key: "danhGia",
      width: "20%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.danhGia - b.danhGia,
      render: (text, khoaHoc) => {
        return <Rate allowHalf defaultValue={khoaHoc.danhGia / 2} />;
      },
    },

    {
      title: "Thao tác",
      key: "maKhoaHoc",
      width: "15%",
      render: (text, khoaHoc) => {
        const xoaKhoaHoc = (maKhoaHoc) => {
          if (userProfile) {
            let taiKhoan = userProfile.taiKhoan;
            let data = {
              taiKhoan: taiKhoan,
              maKhoaHoc: maKhoaHoc,
            };
            swal({
              title: "Xoá khoá học",
              text: "Bạn có chắc chắc muốn xoá?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Chắc chắn!",
            }).then((result) => {
              if (result === true) {
                swal("Đã xoá!", "Khoá học đã được xoá.");
                dispatch(huyGhiDanhKhoaHoc(data));
              }
            });
          }
        };
        return (
          <button
            onClick={() => xoaKhoaHoc(khoaHoc.maKhoaHoc)}
            className="btn btn-danger"
          >
            Huỷ
          </button>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={data} rowKey="maKhoaHoc" />;
};

export default DanhSachKhoaHocDaDangKy;
