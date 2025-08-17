import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    reviewScore: 4.76,
    reviewCount: 345,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Form + Policy */}
        <div className="md:col-span-2 space-y-6">
          <BookingForm />
          <CancellationPolicy />
        </div>

        {/* Right: Order summary */}
        <div className="md:col-span-1">
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}
