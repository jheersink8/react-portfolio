// Component for the timeline events
function TimelineEvents(props) {
    return (
        <ul className="timeline">
            {props.timelineEvents.map(event => (
                <li className="event scrollTimeline" data-date={event.date} key={event.id}>
                                      
                        <div>{event.description}</div>
             
                </li>
            ))}
        </ul>
    );
}

export default TimelineEvents;