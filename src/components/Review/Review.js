import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./main.scss";
import woman1 from "../../assets/img/Avatar/avatar5women1.jpeg";
import woman2 from "../../assets/img/Avatar/avatar2woman2.png";
import man1 from "../../assets/img/Avatar/avatar3men1.png";
import man2 from "../../assets/img/Avatar/avatar4men2.png";

export default function Review() {
  const review = [
    {
      name: "Thái Anh",
      description:
        "Tôi là giáo viên giảng dạy Tin học vì thế việc bổ sung kiến thức CNTT là rất cần thiết. Tôi chọn hệ ĐTTX của trường vì tính tiện lợi và chất lượng đào tạo.",
      address: "Hà Tĩnh",
      img: woman1,
    },
    {
      name: "Bành Thị Lẹm",
      description:
        "Chương trình giúp tôi có thêm nhiều kiến thức hay. Tôi vẫn có thể nghiên cứu lại kiến thức bất kỳ lúc nào nhờ nguồn giáo trình, tài liệu phong phú.",
      address: "Tiền Giang",
      img: woman2,
    },
    {
      name: "Trần Thao Túng",
      description:
        "Chương trình giúp ích rất nhiều cho tôi vì hỗ trợ thêm kiến thức trong công việc. Tôi có thể ứng dụng nhiều kiến thức lập trình, quản trị cơ sở dữ liệu… vào công việc để xử lý vấn đề.",
      address: "TP. Hồ Chí Minh",
      img: man1,
    },
    {
      name: "Trần Trầm Trồ",
      description:
        "Chương trình đã giúp tôi nâng cao thêm trình độ để có thể phục vụ tốt hơn cho công việc giảng dạy của mình. Tôi có thể tự do trao đổi trực tiếp với thầy khi có thắc mắc.",
      address: "Đà Nẵng",
      img: man2,
    },
  ];
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5">
        <div className="text-center ">
          <h1 className="sectionTitle">HỌC VIÊN TIÊU BIỂU</h1>
        </div>
        <p className="text-center sectionParagraph">
          Cảm nhận của những học viên đã theo học tại E-learning
        </p>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {review.map((reviewDetail, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="shadow-effect">
                      <img src={reviewDetail.img} alt="" className="img-circle" />
                      <p className="text__description">{reviewDetail.description}</p>
                    </div>
                    <div className="testimonial-name">
                      <h5>{reviewDetail.name}</h5>
                      <small>{reviewDetail.address}</small>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
