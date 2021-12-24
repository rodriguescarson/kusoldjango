import * as React from 'react';
import { ScheduleComponent, Week, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { UserContext } from '../../App'
class WorkingHours extends React.Component {

    constructor() {
        super(...arguments);
        // const { state, dispatch } = useContext(UserContext)
        const scheduleData =
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 16, 12, 30),
            IsAllDay: false
        };
        this.data = extend([], scheduleData, null, true);
    }
    render() {
        return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: this.data }} firstDayOfWeek={1}>
            <ViewsDirective>
                <ViewDirective option='Week' />
                <ViewDirective option='Month' />
            </ViewsDirective>
            <Inject services={[Week, Month]} />
        </ScheduleComponent>;
    }
}

export default WorkingHours