import React from "react";

class ViewModal extends React.Component {
    onCanelBtnClick=()=>{
      this.props.onModalClose(1)
    }
  
    render(){
        var content = this.props.viewcontent;
        return (
            <div>
              <div
                id="create_modal"
                className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
              >
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                  <div>
                    <p>View Product</p>
                    <hr className="mb-4" />
                    <div className="flex space-x-2 text-center justify-between items-center">
                      <div className="w-3/5 flex flex-col space-y-4 justify-center items-start">
                        <p>{"ID: " + content.id}</p>
                        <p>{"Name: " + content.name}</p>
                        <p>{"Describe: " + content.description}</p>
                        <p>{"Price: " + content.price}</p>
                      </div>
                    </div>
                    <hr className="mt-4 mb-1" />
                    <div className="flex space-x-2 items-end justify-end">
                      <button
                        className="w-16 h-6 bg-red-500 rounded-md text-white text-sm"
                        onClick={this.onCanelBtnClick}>
                        Exit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }

};

export default ViewModal;
