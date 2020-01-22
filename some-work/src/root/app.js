import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RunningEvent from '../component/virtualRunningEvent';
import CyclingEvent from '../component/virtualCyclingEvents';
import BurnChallenges from '../component/burnChallenges';
import DailyRunner from '../component/dailyRunner';
import DailyRider from '../component/dailyRiders';
import  _  from "lodash";

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            isRunning:null,
            isCycling:null,
            isTopRunner:null,
            isTopRider:null
        }
    }

    componentDidMount(){
        fetch('https://next.json-generator.com/api/json/get/4yscVV598').then((response)=>{
            response.json().then((result)=>{
                console.log("++++",result.payload.running_event);
                this.setState({
                    // isRunning:result.payload.running_event
                    isRunning: _.get(result,"payload.running_event"),
                    isCycling: _.get(result,"payload.cycling_event"),
                    isTopRunner: _.get(result,"payload.daily_top_runner"),
                    isTopRider: _.get(result,"payload.daily_top_rider")
                },()=>{
                    console.log('is::', this.state.isCycling)
                })
            })
        })
    }

    render(){
        const {isRunning,isCycling,isTopRunner,isTopRider} = this.state;
        return(
            <React.Fragment>
                <section className="all-chalenges">
                    <div className="container">
                        <div className="row">
                            <BurnChallenges />
                        </div>
                    </div>
                </section>
               <section className="running-event">
                    <div className="container">
                        <div className="row">
                           <RunningEvent isRunning={isRunning}/>
                           <div className="col-md-12 mb-4">
                           <DailyRunner isTopRunner={isTopRunner}/>
                           </div>
                        </div>
                    </div>
               </section>

               <section className="cycling-events">
                    <div className="container">
                        <div className="row">
                            <CyclingEvent isCycling={isCycling}/>
                            <div className="col-md-12">
                                <DailyRider isTopRider={isTopRider}/>
                            </div>
                        </div>
                    </div>
               </section>
            </React.Fragment>
        )
    }
};
export default App;