import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPagination from "./myPagination";

const TinyurlTable: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [urlsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://host.docker.internal:8000/api/all/"
        );
        setUrls(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastUrl = currentPage * urlsPerPage;
  const indexOfFirstUrl = indexOfLastUrl - urlsPerPage;
  const currentUrls = urls.slice(indexOfFirstUrl, indexOfLastUrl);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ display: "grid" }}>
      <h1>TinyURL List</h1>
      <ul>
        {currentUrls.map((url, index) => (
          <li key={index}>
            <a href={url}>{url}</a>
          </li>
        ))}
      </ul>

      <MyPagination
        currentPage={currentPage}
        totalPages={Math.ceil(urls.length / urlsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TinyurlTable;
