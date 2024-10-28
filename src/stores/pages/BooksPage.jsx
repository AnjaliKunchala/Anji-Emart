import React from "react";
import { booksData } from "../data/books";
import Navibar from "../components/Navibar";

export const BooksPage = () => {
  return (
    <>
      <Navibar />
      <div className="pageSection">
        {booksData.map((item) => {
          return (
            <div>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div className="proModel">
                {item.company},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
