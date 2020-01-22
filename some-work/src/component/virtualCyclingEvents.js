import React,{Component} from 'react';
import Viewall from '../component/viewAllButton';

class CyclingEvent extends Component{

    Viewall=()=>{
        alert("Hii shilpi")
    }

    render(){
        const {isCycling} = this.props;
        console.log("cycling",isCycling)
        return(
            <React.Fragment>
                <div className="v-event col-md-12 mt-4">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="virtual">Virtual Cycling Events</h3>
                            <p>Its make your place an event track. Go join</p>
                        </div>
                        <div className="col-md-3">
                            <div className="my-views">
                                <Viewall onClick={this.Viewall}>view all event</Viewall>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            isCycling?isCycling.map((obj,index)=>(
                                index<4?
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <div className="event-track">
                                        <div className="event-img">
                                            <img src={obj.image} width="100%"/>
                                        </div>
                                        <div className="event-text">
                                            <p className="event-date">1 April 2019</p>
                                            <h6 className="calarois">{obj.title}</h6>
                                            <p className="ev-run-info">{obj.summary}</p>
                                        </div>
                                    </div>
                                </div>
                                :""
                            )):null
                        }


                    </div>
                </div>

                <style jsx="true">
                    {
                        `.event-img img{
                            height:150px;
                            border-radius:10px;
                        }
                        .ev-run-info{
                            color:gray;
                            font-size:14px;
                        }
                        .event-date{
                            color: gray;
                            font-size: 12px;
                            padding-top:10px;
                        }
                        .calarois{
                            color:black;
                            font-size:15px;
                        }
                        .event-track{
                            margin-bottom:35px;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default CyclingEvent;