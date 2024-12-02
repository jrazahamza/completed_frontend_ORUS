import React from 'react';

const TicketSuccessFul = ({ invoiceData = {} }) => {
  const { firstName = 'N/A', lastName = 'N/A', total = '0.00' } = invoiceData;

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-orange-500 text-white p-4">
          <h2 className="text-xl font-bold">Your Ticket</h2>
          <p className="text-sm">Cairo to Los Angeles</p>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold">{`${firstName} ${lastName}`}</h3>
              <p className="text-sm text-gray-500">Business Class</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Seat No:</p>
              <h3 className="text-lg font-bold">42B</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Departure</p>
              <p className="font-medium">Thu, Dec 8</p>
              <p className="text-gray-500">08:00 AM</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Arrival</p>
              <p className="font-medium">Fri, Dec 9</p>
              <p className="text-gray-500">12:00 PM</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-bold text-orange-500">${total}</h4>
            <p className="text-sm text-gray-500">Booking ID: EK445DF</p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-500">
            Please bring this ticket and valid ID to the airport for check-in.
          </p>
        </div>
      </div>
    </>
  );
};

export default TicketSuccessFul;
