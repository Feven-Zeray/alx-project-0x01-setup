import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>(user);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Deep update for nested objects (address, company)
    setFormData((prev) => {
      if (name.startsWith("address.")) {
        const key = name.replace("address.", "") as keyof UserData["address"];
        return { ...prev, address: { ...prev.address, [key]: value } };
      }
      if (name.startsWith("company.")) {
        const key = name.replace("company.", "") as keyof UserData["company"];
        return { ...prev, company: { ...prev.company, [key]: value } };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Add New User</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
          {/* Basic Info */}
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <label className="text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="text-sm font-medium">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          {/* Company Info */}
          <label className="text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="company.name"
            value={formData.company.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="text-sm font-medium">Catch Phrase</label>
          <input
            type="text"
            name="company.catchPhrase"
            value={formData.company.catchPhrase}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          {/* Address Info */}
          <label className="text-sm font-medium">Street</label>
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="text-sm font-medium">Suite</label>
          <input
            type="text"
            name="address.suite"
            value={formData.address.suite}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="text-sm font-medium">City</label>
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="text-sm font-medium">Zipcode</label>
          <input
            type="text"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition mt-2"
          >
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

// import React, { useState, useEffect } from "react";
// import { UserModalProps } from "@/interfaces";

// const UserModal: React.FC<UserModalProps> = ({ user, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState(user);

//   useEffect(() => {
//     setFormData(user); // reset form when modal opens with a new user
//   }, [user]);

//   //   const handleChange = (
//   //     e: React.ChangeEvent<HTMLInputElement>,
//   //     field: string,
//   //     nested?: string
//   //   ) => {
//   //     if (nested) {
//   //       setFormData({
//   //         ...formData,
//   //         [nested]: {
//   //           ...formData[nested as keyof typeof formData],
//   //           [field]: e.target.value,
//   //         },
//   //       });
//   //     } else {
//   //       setFormData({ ...formData, [field]: e.target.value });
//   //     }
//   //   };

//   type NestedField = "address" | "company";

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: string,
//     nested?: NestedField
//   ) => {
//     const value = e.target.value;

//     if (nested) {
//       // Spread nested object safely
//       setFormData((prev) => ({
//         ...prev,
//         [nested]: {
//           ...(prev[nested] as Record<string, any>), // Type assertion
//           [field]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [field]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
//         <h2 className="text-xl font-semibold mb-4">Add / Edit User</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => handleChange(e, "name")}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) => handleChange(e, "username")}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleChange(e, "email")}
//             className="w-full border rounded px-3 py-2"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={(e) => handleChange(e, "phone")}
//             className="w-full border rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Website"
//             value={formData.website}
//             onChange={(e) => handleChange(e, "website")}
//             className="w-full border rounded px-3 py-2"
//           />

//           <h3 className="font-semibold mt-3">Address</h3>
//           <input
//             type="text"
//             placeholder="Street"
//             value={formData.address.street}
//             onChange={(e) => handleChange(e, "street", "address")}
//             className="w-full border rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Suite"
//             value={formData.address.suite}
//             onChange={(e) => handleChange(e, "suite", "address")}
//             className="w-full border rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             placeholder="City"
//             value={formData.address.city}
//             onChange={(e) => handleChange(e, "city", "address")}
//             className="w-full border rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Zipcode"
//             value={formData.address.zipcode}
//             onChange={(e) => handleChange(e, "zipcode", "address")}
//             className="w-full border rounded px-3 py-2"
//           />

//           <h3 className="font-semibold mt-3">Company</h3>
//           <input
//             type="text"
//             placeholder="Company Name"
//             value={formData.company.name}
//             onChange={(e) => handleChange(e, "name", "company")}
//             className="w-full border rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Catch Phrase"
//             value={formData.company.catchPhrase}
//             onChange={(e) => handleChange(e, "catchPhrase", "company")}
//             className="w-full border rounded px-3 py-2"
//           />

//           <div className="flex justify-end mt-4">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="ml-2 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserModal;
