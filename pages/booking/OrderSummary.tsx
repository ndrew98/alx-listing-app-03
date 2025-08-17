import React from "react";

type BookingDetails = {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  image?: string;
  reviewScore?: number;
  reviewCount?: number;
};

const currency = (n: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(n);

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => {
  const { price, bookingFee } = bookingDetails;
  const grandTotal = price + bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <img
          src={
            bookingDetails.image ??
            "https://via.placeholder.com/300x300.png?text=Property"
          }
          alt="Property"
          className="w-28 h-28 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">
            {bookingDetails.propertyName}
          </h3>
          <p className="text-sm text-gray-500">
            {bookingDetails.reviewScore?.toFixed(2) ?? "4.76"} (
            {bookingDetails.reviewCount ?? 345} reviews)
          </p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>{currency(bookingFee)}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency(price)}</p>
        </div>
        <div className="h-px bg-gray-200 my-2" />
        <div className="flex justify-between font-semibold">
          <p>Grand Total</p>
          <p>{currency(grandTotal)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
