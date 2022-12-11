import { useRouter } from "next/router";

const GetCurrentId = ():number => {
  const router = useRouter();
  const id = Number(router.query.id);
  if (isNaN(id)) {
    return 1;
  }
  return id;
}

export default GetCurrentId;