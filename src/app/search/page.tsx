type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const res = await searchParams;
  console.log(res);

  return (
    <></>
  )
}