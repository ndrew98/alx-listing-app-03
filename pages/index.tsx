import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Featured Listing</h1>
        <Card
          title="Ocean View Apartment"
          description="Enjoy your stay with ocean breeze and comfort."
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert("Booking started!")} />
        </div>
      </main>
    </>
  );
}
