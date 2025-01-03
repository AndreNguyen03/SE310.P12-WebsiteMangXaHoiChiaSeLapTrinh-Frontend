import React from "react";
import { Link } from "react-router-dom";
import "./RightSideBar.css";
import axios from "axios";
import { useState, useEffect } from "react";
import HotQuestion from "./HotQuestion";
import { useSelector, useDispatch } from "react-redux";
import TagBox from "../UserProfileMainBar/TagBox";
import IgnoreTagBox from "../UserProfileMainBar/IgnoreTagBox";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import { fetchWatchedTags } from "../../features/WatchedTags/WatchedTags";
// import { fetchIgnoredTags } from "../../features/IgnoreTags/IgnoreTags";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const RightSideBar = () => {
  const [hotPosts, sethotPosts] = useState([]);
  const [watchedTags, setWatchedTags] = useState([]);
  const authState = useSelector((state) => state.auth);
  const tags = useSelector((state) => state.watchedTags.tags);
  const dispatch = useDispatch();
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  //gethosposts
  useEffect(() => {
    axios
      .get("http://localhost:5114/api/Posts/GetMostAnsweredQuestion") // Gọi API
      .then((response) => {
        // Chuyển đổi dữ liệu API theo định dạng custom
        const mappedData = response.data.map((post) => ({
          id: post.id,
          title: post.title,
          answers: post.answers,
        }));

        sethotPosts(mappedData); // Lưu vào state custom
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi khi lấy bài đăng!", error);
      });
  }, []);

  // useEffect(() => {
  //   dispatch(fetchWatchedTags(authState.user));
  // }, [authState.user]);

  // Kiểm tra xem đường dẫn có phải là /questions/tags/:tagId không
  const isTagPage = location.pathname.startsWith("/questions/tags");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-orange-50 rounded shadow-sm"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h2
          className="sidebar-item-tittle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Xin chào thế giới!
        </motion.h2>
        <div className="p-4">
          <motion.p
            className="text-gray-600 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Đây là một trang hỏi đáp được chỉnh sửa cộng đồng dành cho{" "}
            <strong>các lập trình viên chuyên nghiệp và đam mê</strong>. Miễn
            phí 100%.
          </motion.p>
          <motion.div
            className="flex mt-4 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/About"
              className="text-blue-500 hover:scale-105 transition-transform"
            >
              Về chúng tôi
            </Link>
          </motion.div>
        </div>
        <motion.h2
          className="sidebar-item-tittle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Các bài viết nổi bật
        </motion.h2>
        <motion.div
          className="p-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {hotPosts && hotPosts.length > 0 ? (
            hotPosts.map((post) => <HotQuestion key={post.id} post={post} />)
          ) : (
            <p>Không có bài viết nổi bật nào</p>
          )}
        </motion.div>
      </motion.div>
      {/* Kiểm tra và chỉ hiển thị TagBox nếu không phải là trang tag */}
      {!isTagPage && authState.isAuthenticated ? <TagBox /> : null}
      {/* Kiểm tra và chỉ hiển thị IgnoreTagBox nếu không phải là trang tag */}
      {!isTagPage && authState.isAuthenticated ? <IgnoreTagBox /> : null}
    </motion.div>
  );
};

export default RightSideBar;
