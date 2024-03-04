export default function Page({params}: {params: {id: number}}) {
  return <>
    <h1>Todo Id: {params.id}</h1>
  </>
}