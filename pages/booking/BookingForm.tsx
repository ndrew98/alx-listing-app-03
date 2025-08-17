import React from "react";

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

const Input = ({
  id,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) => (
  <input
    id={id}
    name={id}
    type={type}
    placeholder={placeholder}
    autoComplete={autoComplete}
    className="mt-2 block w-full rounded-md border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);

const BookingForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For this milestone we’re just preventing default submission.
    // Hook up actual processing in a later milestone.
    alert(
      "Booking submitted. Payment processing will be added in a later milestone."
    );
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={onSubmit} className="mt-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" autoComplete="given-name" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" autoComplete="family-name" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" autoComplete="tel" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            autoComplete="cc-number"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="expDate">Expiration Date</Label>
            <Input id="expDate" placeholder="MM/YY" autoComplete="cc-exp" />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="password"
              placeholder="123"
              autoComplete="cc-csc"
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <Label htmlFor="street">Street Address</Label>
          <Input id="street" autoComplete="address-line1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="apt">Apt/Suite</Label>
            <Input id="apt" autoComplete="address-line2" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" autoComplete="address-level2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" autoComplete="address-level1" />
          </div>
          <div>
            <Label htmlFor="zip">Zip Code</Label>
            <Input id="zip" autoComplete="postal-code" />
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="country">Country</Label>
          <Input id="country" autoComplete="country-name" />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-md w-full transition"
        >
          Confirm &amp; Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
