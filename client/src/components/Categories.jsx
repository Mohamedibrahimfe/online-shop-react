import useFetch from "../hooks/useFetch";
export default function categories() {
  const { data, loading, error } = useFetch(`categories?populate=*`);

  // console.log(data);
}
