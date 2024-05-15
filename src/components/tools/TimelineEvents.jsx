function TimelineEvents(props) {
    return (
        <ul className="timeline">
            {props.timelineEvents.map(event => (
                <li className="event" data-date={event.date} key={event.id}>
                                      
                        <div>{event.description}</div>
             
                </li>
            ))}
        </ul>
    );
}

export default TimelineEvents;