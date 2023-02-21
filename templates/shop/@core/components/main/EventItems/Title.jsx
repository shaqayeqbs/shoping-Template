const EventTitle = ({data}) => {
    return (
        <h2 className="font-bold text-3xl">
            {data.value}
        </h2>
    )
}

export default EventTitle;