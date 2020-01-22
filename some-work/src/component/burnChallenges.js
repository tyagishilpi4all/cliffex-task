import React,{Component} from 'react';

const arr1 =[
    {
        image:"https://images.getset.run/live/challenges/2kPro.jpg",
        title:"Summer of 59 km running event.",
        data:"Quickly Launch a professional site - join now"
    },
    {
        image:"https://images.getset.run/live/challenges/2kex2.jpg",
        title:"Summer of 59 km running event.",
        data:"Quickly Launch a professional site - join now" 
    }
]

class BurnChallenges extends Component{

    Register=()=>{
        alert("Registration in processing...")
    }

    render(){
        return(
            <React.Fragment>
                <div className="my-challenge mt-3 col-md-12">
                    <div className="row">
                       <div className="col-md-8">
                            <div className="trainer-chall">
                                <div className="challenge-img">
                                    <img src="https://images.getset.run/live/thumb_goapppublish_copy_3@2x-min.png" width="100%"/>
                                </div>
                                <div className="challenge-text">
                                <p className="event-date-01">1 April 2019</p>
                                <h3 className="calarois-01">10,000 Calories Burn Challenge</h3>
                                <p className="ev-run-info-01">May 2019 virtual running/walking event</p>

                                <button className="btn register-btn mb-5" onClick={this.Register}>Register now</button>
                                </div>
                            </div>
                       </div>
                       <div className="col-md-4">
                           {
                               arr1? arr1.map((obj,index)=>(
                                    <div className="aside-information" key={index}>
                                            <div className="aside-img">
                                                <img src={obj.image} width="100%"/>
                                            </div>
                                            <div className="aside-text">
                                                <h6 className="calarois-02">{obj.title}</h6>
                                                <p className="ev-run-info-02">{obj.data}</p>
                                            </div>
                                    </div>
                               ))
                                :null
                           }

                       </div>
                    </div>
                </div>


                <style jsx="true">
                    {
                        `.challenge-img img{
                            border-radius: 10px;
                        }
                        .event-date-01{
                            color:gray;
                            font-size:14px;
                            padding-top:15px;
                        }
                        .calarois-01{
                            font-weight:550;
                        }
                        .ev-run-info-01{
                            color:gray;
                        }
                        .aside-img img{
                            border-radius:10px;
                        }
                        .calarois-02{
                            font-weight:550;
                            padding-top:15px;
                        }
                        .ev-run-info-02{
                            color:gray;
                            font-size:14px;
                        }
                        .register-btn{
                            background:#445771;
                            color:white;
                            padding:7px 25px;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default BurnChallenges;