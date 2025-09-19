import React from "react";
import Header from "../layout/Header";
import { UserProps } from "@/interfaces";
import { Mail, Phone, Globe, MapPin, Building2 } from "lucide-react";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <>
      <div className="flex items-center justify-center font-sans antialiased p-4">
        <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
          <div className="relative p-6 md:p-8 text-center bg-gradient-to-br from-indigo-50 to-purple-50">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
              {name}
            </h2>
            <p className="text-xs md:text-sm font-medium text-gray-500 mt-1">
              @{username}
            </p>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 md:w-16 h-1 bg-indigo-400 rounded-full animate-pulse"></span>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm md:text-base font-medium truncate"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors duration-200">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  {phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors duration-200 sm:col-span-2">
                <Globe size={20} className="text-purple-500 flex-shrink-0" />
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium truncate"
                >
                  {website}
                </a>
              </div>
            </div>

            {/* Address & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {address && (
                <div className="relative p-5 bg-gray-50 rounded-2xl border border-dashed border-gray-200 group transition-all duration-300 hover:bg-white hover:shadow-md flex flex-col justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-indigo-50 rounded-full group-hover:bg-indigo-400 transition-all">
                    <MapPin
                      size={20}
                      className="text-red-500 group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center mb-2 mt-2">
                    Address
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                    {address.street}, {address.suite}
                    <br />
                    {address.city}, {address.zipcode}
                  </p>
                </div>
              )}
              {company && (
                <div className="relative p-5 bg-gray-50 rounded-2xl border border-dashed border-gray-200 group transition-all duration-300 hover:bg-white hover:shadow-md flex flex-col justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-purple-50 rounded-full group-hover:bg-purple-400 transition-all">
                    <Building2
                      size={20}
                      className="text-indigo-500 group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 text-center mb-2 mt-2">
                    Company
                  </h3>
                  <p className="italic text-xs md:text-sm text-gray-600 text-center mb-1">
                    "{company.catchPhrase}"
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-gray-500 text-center">
                    {company.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
