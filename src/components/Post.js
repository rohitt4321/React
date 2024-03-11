import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  console.log(currentPage)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Error fetching data');
      });
  }, []);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = posts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(posts.length / recordsPerPage);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-2'>
            <div className='container'>
              <div className='col'>
                <Pagination
                  posts={posts}
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
          <div className='col-10'>
            <div className='container'>
       
                <Outlet />
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
