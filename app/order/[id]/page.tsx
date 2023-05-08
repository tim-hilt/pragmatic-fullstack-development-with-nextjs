import fs from "fs";

interface Order {
  id: string;
  date: string;
  vehicle: string;
  status: string;
}

// TODO: How can I pass the already fetched state to this component?

export default function Order({ params }: { params: { id: string } }) {
  const db = fs.readFileSync("orders.json", "utf-8");
  const orders: Array<Order> = JSON.parse(db);
  const order = orders.find((o) => {
    return o.id === params.id;
  }) as Order;

  return (
    <div className="p-5">
      <h1 className="text-3xl mb-2">Auftrag {order.id}</h1>
      <div>Fahrzeug: {order.vehicle}</div>
      <div>Startdatum: {order.date}</div>
    </div>
  );
}
