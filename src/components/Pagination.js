import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import goUp from "../utils/GoUp";

const Pagination = (props) => {
  let pageChange = (data) => {
    props.setPageNumber(data.selected + 1);
    goUp();
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <ReactPaginate
      previousLabel="«"
      nextLabel="»"
      previousClassName="btn btn-ghost w-12 font-mono"
      nextClassName="btn btn-ghost w-12 font-mono"
      breakLabel="..."
      breakClassName="btn btn-disabled w-12 text-black font-mono"
      pageCount={props.info.pages}
      containerClassName="btn-group justify-center font-mono"
      pageClassName="btn btn-ghost w-12 font-mono"
      activeClassName="bg-secondary-color w-12 font-mono"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      onPageChange={pageChange}
      forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
      pageLinkClassName="p-3"
      previousLinkClassName="p-3"
      nextLinkClassName="p-3"
    />
  );
};

export default Pagination;
