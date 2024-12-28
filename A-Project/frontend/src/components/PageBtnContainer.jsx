import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAllJobsContext } from '../pages/AllJobs';

const PageBtnContainer = () => {
  const {data: {numberOfPages, currentPage}} = useAllJobsContext();
  const pages = Array.from ({length: numberOfPages }, (_,index) => {
    return index + 1
  });
  const {search, pathname} = useLocation()
  const navigate = useNavigate();
  // console.log(search, pathname);
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
    console.log(pageNumber);
  }
  return (
    <Wrapper>
      <button className="btn prev-btn" onClick={() =>{
        let prevPage = currentPage -1;
        if(prevPage < 1) prevPage = numberOfPages;
        handlePageChange(prevPage);
      }}>
        <HiChevronDoubleLeft/>
        Prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber)=>{
            return (
            <button className={`btn page-btn ${pageNumber === currentPage && 'active'}`} 
                    key={pageNumber} onClick={()=> handlePageChange(pageNumber)}>
                {pageNumber}
            </button>
            )
        })}
      </div>
      <button className="btn prev-btn" onClick={() =>{
        let nextPage = currentPage +1;
        if(nextPage > numberOfPages) nextPage = 1;
        handlePageChange(nextPage);
      }}>
        <HiChevronDoubleRight/>
        Next
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer;
