// @ts-ignore
import * as React from "react";

import { UserData } from "@/Interfaces.ts";

interface UserTableProps {
  userData: UserData[];
}

const UserTable = ({ userData }: UserTableProps) => {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {userData.length > 0
            ? userData.map((user: UserData) => (
                <tr key={user.name.first}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <img src={user.picture.thumbnail} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.name.first}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.name.last}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.phone}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
