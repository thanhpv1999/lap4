import React from "react";

class ViewItems extends React.Component {
  onViewBtnClick=()=>{
    this.props.viewmodal(1)
    this.props.UpdateView(this.props.viewcontent)
  }
  
    render(){
        var content = this.props.viewcontent;
        return (
            <tr key={content.id} className="p-1">
              <td>{content.id}</td>
              <td>{content.name}</td>
              <td>{content.description}</td>
              <td>{content.price}</td>
              <td>
                <span className="flex items-center justify-center space-x-1">
                  <button onClick={this.onViewBtnClick} className="w-1/4 h-8 text-xs text-white bg-blue-500 rounded-md">
                    View
                  </button>
                  <button className="w-1/4 h-8 text-xs text-white bg-green-500 rounded-md">
                    Edit
                  </button>
                  <button className="w-1/4 h-8 text-xs text-white bg-red-500 rounded-md">
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          );
    }

};

export default ViewItems;
