import React from 'react';
import DashboardWrapper, {
    DashboardWrapperMain,
    DashboardWrapperRight
} from "../../Component/dashboard-wrapper/Dashboard-Wrapper";
import Box from "../../Component/Box/Box";
import { data } from "../../constants";

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-8 col-md-12">
                        <div className="row">
                            {data.summary.map((item, index)=> (
                                    <div key={`summary - ${index}`} className='col-6 col-md-6 col-sm-12 mb'>
                                         <Box/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                DashboardWrapperRight
            </DashboardWrapperRight>
        </DashboardWrapper>
    );
};

export default Dashboard;