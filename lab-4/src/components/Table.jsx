import React from "react";
import ViewItems from "./ViewItems";


const Table = (props) => {
  // props.records chứa tất cả các bản ghi
  var the = [];
  var dem = props.viewStt;
  // var i = 0;


  props.records.map((record,i) => {
    if((i>=((dem - 1)*5))&&(i<(dem*5))){
      the[i] = <ViewItems viewmodal={props.viewmodal} viewcontent={record} UpdateView={props.Content} />
    }
    return 0;
  })

  // for(var ele of props.records)
  // {
  //   if((i>=((dem - 1)*5))&&(i<(dem*5))){
  //     the[i] = <ViewItems viewmodal={props.viewmodal} viewcontent={ele} UpdateView={props.Content} />
  //   }
  //   i++;
  // }

  return (
    <div>
      <table
        id="main-table"
        class="border-collapse border border-slate-300 mt-2 text-xl w-full mx-4"
      >
        <tr>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "5%" }}
          >
            ID
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "20%" }}
          >
            Name
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "20%" }}
          >
            Description
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "10" }}
          >
            Price
          </th>
          <th
            className="border-collapse border border-slate-300"
            style={{ width: "35%" }}
          >
            Action
          </th>
        </tr>
        {the}
      </table>
    </div>
  );
};

export default Table;
