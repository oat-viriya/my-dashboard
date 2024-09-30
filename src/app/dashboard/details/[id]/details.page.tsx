"use client";

import { UserData } from "@/data";

interface UserDetailPageProps {
  userData: UserData;
}

export default function UserDetailPage(props: UserDetailPageProps) {
  const { userData } = props;
  const {
    user,
    email,
    role,
    status,
    registered,
    country,
    addresses,
    nationality,
  } = userData;

  return (
    <div className="w-full h-full p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
          User Details
        </h2>
        <section className="mb-6">
          <h3 className="font-semibold text-2xl text-gray-700 mb-4">
            User Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <p>
              <strong className="text-gray-800">Name:</strong> {user}
            </p>
            <p>
              <strong className="text-gray-800">Email:</strong> {email}
            </p>
            <p>
              <strong className="text-gray-800">Role:</strong> {role}
            </p>
            <p>
              <strong className="text-gray-800">Status:</strong>{" "}
              <span
                className={`px-2 py-1 rounded ${
                  status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </span>
            </p>
            <p>
              <strong className="text-gray-800">Registered:</strong>{" "}
              {registered}
            </p>
            <p>
              <strong className="text-gray-800">Country:</strong> {country}
            </p>
            <p>
              <strong className="text-gray-800">Nationality:</strong>{" "}
              {nationality}
            </p>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold text-2xl text-gray-700 mb-4">
            Addresses
          </h3>
          <div className="grid gap-4">
            {addresses.map((address, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm">
                <strong className="capitalize text-gray-700">
                  {address.type}:
                </strong>{" "}
                <span className="text-gray-600">{address.address}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
