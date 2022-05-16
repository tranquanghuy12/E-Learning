import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./main.scss";
export default function Review() {
  const review = [
    {
      name: "Thái Anh",
      description:
        "Tôi là giáo viên giảng dạy Tin học vì thế việc bổ sung kiến thức CNTT là rất cần thiết. Tôi chọn hệ ĐTTX của trường vì tính tiện lợi và chất lượng đào tạo.",
      address: "Hà Tĩnh",
      img: "https://avatarfiles.alphacoders.com/185/thumb-185779.png",
    },
    {
      name: "Bành Thị Lẹm",
      description:
        "Chương trình giúp tôi có thêm nhiều kiến thức hay. Tôi vẫn có thể nghiên cứu lại kiến thức bất kỳ lúc nào nhờ nguồn giáo trình, tài liệu phong phú.",
      address: "Tiền Giang",
      img: "https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png",
    },
    {
      name: "Trần Thao Túng",
      description:
        "Chương trình giúp ích rất nhiều cho tôi vì hỗ trợ thêm kiến thức trong công việc. Tôi có thể ứng dụng nhiều kiến thức lập trình, quản trị cơ sở dữ liệu… vào công việc để xử lý vấn đề.",
      address: "TP.Hồ Chí Minh",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jXXxJnecqM87MwKRrRmVtHvtp1GAzN7vfg&usqp=CAU",
    },
    {
      name: "Trần Trầm Trồ",
      description:
        "Chương trình đã giúp tôi nâng cao thêm trình độ để có thể phục vụ tốt hơn cho công việc giảng dạy của mình. Tôi có thể tự do trao đổi trực tiếp với thầy khi có thắc mắc.",
      address: "Đà Nẵng",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7PYLpR9y12Nsa7CF-7heRSvJ7QonS8sNuw&usqp=CAU",
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
        items: 3,
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
              {review.map((reviewDetail) => {
                return (
                  <ReviewItem
                    reviewDetail={reviewDetail}
                    key={reviewDetail._key}
                  />
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
