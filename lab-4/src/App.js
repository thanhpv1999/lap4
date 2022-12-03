import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Paginate from './components/Paginate';
import React from 'react';
import CreateProductModal from './components/CreateProductModal';
import ViewModal from './components/ViewModal';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      viewStt: 1,
      products: [
        {id: 11, name: "Candy", description: "For Chrismast", price: "$2.99"},
        {id: 2, name: "Candy", description: "For Chrismast", price: "$2.99"},
        {id: 3, name: "Candy", description: "For Chrismast", price: "$2.99"}
      ],
      onModalOpen:{
        create: false,
        view: false,
        edit: false,
        delete: false
      },
      viewcontent:{
        id: 1,
        name: "candy",
        description: "viet nam",
        price: "1000"
      }
      
    }
  }

//----------------------------------------------------------------------
  ChangeView=(viewStt)=>{
    this.setState({
      viewStt: viewStt
      
    })
    alert(viewStt);
  }

  ViewBtn=(viewcontent)=>{
    this.setState({
      viewcontent: viewcontent
    })
  }

//----------------------------------------------------------------------  
  addProduct=(product)=>{
    let currentProducts = this.state.products;
    currentProducts.push(product)
    this.setState({
      products: currentProducts
    })
  }

//---------------------------------------------------------------------
  editProduct=(product)=>{
    let currentProducts = this.state.products;
    currentProducts.push(product)
    this.setState({
      products: currentProducts
    })
  }



//----------------------------------------------------------------------  
  onCreateBtnClick=(ele)=>{  
    let onModalOpen = this.state.onModalOpen;
    if(ele === 1){
      onModalOpen.view=!onModalOpen.view
    }else if(ele === 2){
      onModalOpen.edit=!onModalOpen.edit
    }else if(ele === 3){
      onModalOpen.delete=!onModalOpen.delete
    }else{
      onModalOpen.create=!onModalOpen.create
    }
    

    this.setState({
      onModalOpen:onModalOpen
    })
  }

  onCreateBtnClose=(ele)=>{  
    let onModalOpen = this.state.onModalOpen;
    if(ele === 0){
      onModalOpen.create=!onModalOpen.create
    }else if(ele === 1){
      onModalOpen.view=!onModalOpen.view
    }else if(ele === 2){
      onModalOpen.edit=!onModalOpen.edit
    }else if(ele === 3){
      onModalOpen.delete=!onModalOpen.delete
    }
    
    this.setState({
      onModalOpen:onModalOpen
    })
  }

  render() {
    return (
      <div className='container-md space-y-4'>
        <p className='text-5xl font-bold' >
          Read Products
        </p>
        <hr />
        <button className='bg-blue-500 h-12 w-72 text-3xl rounded-md text-white' onClick={this.onCreateBtnClick}>Create new product</button>
        <Table records={this.state.products} viewStt={this.state.viewStt} viewmodal={this.onCreateBtnClick} Content={this.ViewBtn} />
        <Paginate onViewDetail={this.ChangeView} />
        {this.state.onModalOpen.create && <CreateProductModal onModalClose={this.onCreateBtnClose} onAddProduct={this.addProduct}/>}
        {this.state.onModalOpen.view && <ViewModal onModalClose={this.onCreateBtnClose} viewcontent={this.state.viewcontent}/>}
        {this.state.onModalOpen.edit && <CreateProductModal onModalClose={this.onCreateBtnClose} onAddProduct={this.addProduct}/>}
        {this.state.onModalOpen.delete && <CreateProductModal onModalClose={this.onCreateBtnClose} onAddProduct={this.addProduct}/>}
      </div>
    );
  }
}

export default App;
