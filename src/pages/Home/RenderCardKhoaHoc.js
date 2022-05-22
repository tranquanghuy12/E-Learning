import React from "react";
import "./RenderCardKhoaHoc.scss";
import { useHistory } from "react-router-dom";
// import { Avatar, Card, Col, Row } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function RenderCardKhoaHoc({ item }) {
  // const { Meta } = Card;
  const history = useHistory();
  const handleClick = () => {
    history.push("/chitietkhoahoc");
  };
  return (
    // <Card
    //   hoverable
    //   style={{ width: "100%" }}
    //   cover={<img alt={item.tenKhoaHoc} src={item.hinhAnh} />}
    // >
    //   <Meta title={item.tenKhoaHoc} description={`Lượt xem: ${item.luotXem}`} />
    // </Card>

    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={item.hinhAnh}
          alt={item.tenKhoaHoc}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.tenKhoaHoc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Lượt xem: ${item.luotXem}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex justify-content-end">
        <Button variant="contained" size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
