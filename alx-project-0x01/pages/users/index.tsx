import { GetStaticProps } from "next";
import { useState } from "react";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        {/* Centered Title and Add Button Right */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-semibold text-center">Users</h1>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add User
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <UserModal
            user={{
              id: users.length + 1,
              name: "",
              username: "",
              email: "",
              phone: "",
              website: "",
              address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: { lat: "", lng: "" },
              },
              company: { name: "", catchPhrase: "", bs: "" },
            }}
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddUser}
          />
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;

// import { GetStaticProps } from "next";
// import { UserProps, UserData } from "@/interfaces";
// import UserCard from "@/components/common/UserCard";
// import Header from "@/components/layout/Header";
// import UserModal from "@/components/common/UserModal";
// import { useState } from "react";

// interface UsersPageProps {
//   posts: UserProps[];
// }

// const Users: React.FC<UsersPageProps> = ({ posts }) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   return (
//     <>
//       <Header />
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-6">
//           {/* Users Title Centered */}
//           <div className="flex-1 flex justify-center">
//             <h1 className="text-2xl font-semibold text-center">Users</h1>
//           </div>

//           {/* Add User Button on Right */}
//           <button
//             onClick={() => setModalOpen(true)}
//             className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
//           >
//             Add User
//           </button>
//         </div>

//         {/* Grid for all user cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((user) => (
//             <UserCard key={user.id} {...user} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json();

//   return {
//     props: {
//       posts, // ensure this matches the prop expected by your Users component
//     },
//   };
// }

// export default Users;
