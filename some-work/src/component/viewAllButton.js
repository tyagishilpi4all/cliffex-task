import React,{Component, Children} from 'react';

class Viewall extends Component{

    render(){
        const {children,onClick} = this.props;
        return(
            <React.Fragment>
                <div className="view-all" onClick={onClick}>
                    <p>{children}</p>
                </div>


                <style jsx="true">
                    {
                      `.view-all{
                          background:#256098;
                          border-radius:25px;
                          color:white;
                          width:120px;
                          margin-left:auto;
                      }
                      .view-all p{
                        text-transform:uppercase;
                        font-size:10px;
                        text-align:center;
                        padding: 6px 0px;
                      }
                      `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default Viewall;