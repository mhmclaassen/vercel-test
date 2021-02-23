import { IUser } from "../pages/api/hello";

interface Props {
  user: IUser;
}

export default function Hello({ user }: Props) {
  const { name, age, hobbies } = user;

  return (
    <div>
      <h1>
        {name} ({age})
      </h1>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
