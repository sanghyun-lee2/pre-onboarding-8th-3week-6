import styled from "styled-components";
import { KeyLIEvent } from "../types";

interface childProps {
   setSearchWord: React.Dispatch<React.SetStateAction<string>>;
   localStorageData: string[] | undefined;
   focusContralArrow: (e: KeyLIEvent, index: number, length: number) => void;
   deleteSearchedWord: (item: string) => void;
   setFocusItem: React.Dispatch<React.SetStateAction<string>>;
   onFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RecentSerach = ({
   setSearchWord,
   localStorageData,
   focusContralArrow,
   deleteSearchedWord,
   setFocusItem,
   onFocus,
}: childProps) => {
   return (
      <CardBox>
         <SearchCate>최근 검색어</SearchCate>
         <RecommendList>
            {localStorageData && localStorageData !== undefined ? (
               localStorageData?.map((item: string, index: number) => (
                  <li
                     key={index}
                     id={`searchList${index}`}
                     tabIndex={0}
                     onClick={() => {
                        setSearchWord(item);
                        onFocus(false);
                     }}
                     onKeyDown={(e) => focusContralArrow(e, index, localStorageData?.length)}
                     onFocus={() => setFocusItem(item)}
                  >
                     <ListItemWrap>
                        <img src={require("../images/searchGray.png")} alt="돋보기 이미지" />
                        <span>{item}</span>
                     </ListItemWrap>
                     <CancelBtn
                        onClick={(e) => {
                           e.stopPropagation();
                           deleteSearchedWord(item);
                        }}
                        src={require("../images/cancel.png")}
                        alt="최근 검색어 삭제"
                     />
                  </li>
               ))
            ) : (
               <p>최근 검색어가 없습니다.</p>
            )}
         </RecommendList>
      </CardBox>
   );
};

const CardBox = styled.div`
   padding: 10px;
   & p {
      color: #a3a3a3;
      font-weight: bold;
   }
`;

const SearchCate = styled.span`
   margin-bottom: 10px;
   color: gray;
   font-size: 0.8rem;
   font-weight: bold;
`;

const RecommendList = styled.ul`
   padding: 0;
   & li {
      margin: 15px 0 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      &:focus {
         outline: none;
         background-color: #cae9ff;
      }
   }
   & img {
      margin-right: 7px;
      width: 20px;
      height: 20px;
   }
`;

const ListItemWrap = styled.div`
   display: flex;
   align-items: center;
`;

const CancelBtn = styled.img`
   width: 18px;
   height: 18px;
   margin-right: 10px;
   cursor: pointer;
`;
