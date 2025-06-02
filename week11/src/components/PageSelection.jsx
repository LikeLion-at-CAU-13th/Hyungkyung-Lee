import React from "react";
import styled from "styled-components";
import { getPerPage } from "../apis/userlist";

const SelectionLayout = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const PageBox = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.$active ? "#000000" : "#C9C9C9")};
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const PageSelection = ({ curPage, setCurPage, userData, offset}) => {
  const pageCount = Math.ceil(userData.length / offset);

  // const handleClick = (pageIdx) => {
  //   setCurPage(pageIdx);
  // };

  return (
    <SelectionLayout>
      {Array.from({ length: pageCount }).map((_, idx) => (
        <PageBox
          key={idx}
          $active={idx === curPage ? true:false}
          onClick={() =>setCurPage(idx)}
        >
          {idx + 1}
        </PageBox>
      ))}
    </SelectionLayout>
  );
};

// const PageSelection = ({ curPage, setCurPage, userData, setUserData }) => {
//   const offset = 5;
//   const pageNumber = 0;
//   const pageArray = [];

//   const handleClick = async () => {
//     const response = await getPerPage();
//     setUserData(response);
//     setCurPage(1);
//     pageNumber = userData.length / offset + 1;

//     for (let i=0; i<pageNumber; i++)
//       for (let j=0; j<offset; j++) {
//         pageArray[i].push(userData[i+j]);
//         console.log("pageArray num", i, "userData num", i+j, pageArray[i][j]);
//     }
//   };
//   return (
//     <SelectionLayout>
//       {pageArray.map((idx) => (
//         <PageBox
//           key={idx}
//           $active={idx === curPage ? true : false}
//           onClick={() => handleClick()}
//         >
//           {idx}
//         </PageBox>
//       ))}
//     </SelectionLayout>
//   );
// };

export default PageSelection;
