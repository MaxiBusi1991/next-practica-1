import Link from "next/link";

async function getUsers (id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data;
}

async function UserPage ({params}) {
  const user = await getUsers(params.id)
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-slate-400 p-10 rounded-md">
          <img src={user.avatar} alt="foto integrante" className="m-auto my-4" />
          <h3 className="text-3xl font-bold">
          {user.id} {user.first_name} {user.last_name}
          </h3>
          <p>email: {user.email}</p>
        </div>
      </div>
      <Link href='/'>
        <p className="flex justify-center items-center">volver</p>
      </Link>
      </div>
  )
}

export default UserPage;