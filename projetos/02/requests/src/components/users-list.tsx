import useUsers from "../hooks/use-users";

function UserList() {
  const { users, isLoadingUsers } = useUsers();

  if (isLoadingUsers) {
    return <div>Carregando todos os usuários</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          Nome:{user.name} / Username: {user.id}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
