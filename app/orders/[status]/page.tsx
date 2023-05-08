import fs from "fs";
import Link from "next/link";

interface Order {
  id: string;
  date: string;
  vehicle: string;
  status: string;
}

export default function Orders({ params }: { params: { status: string } }) {
  const db = fs.readFileSync("orders.json", "utf-8");
  const orders: Array<Order> = JSON.parse(db);

  return (
    <div>
      <table className="table-auto border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Startdatum</th>
            <th className="border p-2">Fahrzeug</th>
            <th className="border p-2"></th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => order.status == params.status)
            .map((order) => (
              <tr key={order.id}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">
                  {new Date(order.date).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="border p-2">{order.vehicle}</td>
                <td className="border p-2">
                  <Link
                    className="bg-sky-500 px-2 py-1 rounded-md"
                    href={`/order/${order.id}`}
                  >
                    Auftragsdetails
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
