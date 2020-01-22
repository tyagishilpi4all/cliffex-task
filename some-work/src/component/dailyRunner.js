import React,{Component} from 'react';

class DailyRunner extends Component{

    render(){
        const {isTopRunner} = this.props;
        
        return(
            <React.Fragment>
              <div className="daily-runner">
                  <h5 className="d-run">Daily Runners</h5>
                <div className="row">
                    {
                        isTopRunner?isTopRunner.map((obj,index)=>(
                            index<6?
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={index}>
                                <div className="d-runner">
                                    <div className="runner-img">
                                        <img src={obj.profile_pic} />
                                    </div>
                                    <div className="runner-text">
                                        <h6 className="calarois calo-1">{obj.name}</h6>
                                        
                                        <p className="ev-run-info mb-0">{obj.distance} Km in {obj.duration} Hr</p>
                                        <p className="ev-run-info">@...</p>
                                    </div>
                                </div>
                            </div>
                            :""
                        ))
                        :null
                    }
                   
                </div>
              </div>


              <style jsx="true">
                 {
                     `.daily-runner{
                         border-top:1px solid silver;
                     }
                     .d-run{
                         padding-top:25px;
                         padding-bottom:20px;
                         font-weight:550;
                     }
                     .runner-img{
                         height:80px;
                         width:80px;
                         border-radius:50%;
                     }
                     .runner-img img{
                        height:80px;
                        width:80px;
                        border-radius:50%;
                     }
                     .calo-1{
                         padding-top:10px;
                     }
                     `
                 }
              </style>
            </React.Fragment>
        )
    }
};

export default DailyRunner;