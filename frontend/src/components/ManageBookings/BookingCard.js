import "./ManageBookings.css";

const BookingCard = ({ booking }) => {
    const formatDate = (str) => {
        str = str.split("T")[0].split("-");
        return [str[1], str[2], str[0]].join("/");
    };

    return (
        <div className="booking-card">
            <img className="booking-card-image" src={booking.Spot.previewImage} alt="" />
            <h5 className="booking-spot-name">{booking.Spot.name}</h5>
            <p className="booking-city-state">{booking.Spot.city}, {booking.Spot.state}</p>
            <p>{formatDate(booking.startDate)}</p>
        </div>
    )
};

export default BookingCard;
