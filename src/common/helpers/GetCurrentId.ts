import { useRouter } from "next/router";

const GetCurrentId = ():number => {
  const router = useRouter();
  const id = Number(router.query.id);
  return id;
}

export default GetCurrentId;