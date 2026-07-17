const books = [
  { id: 1, title: "Clean Code" },
  { id: 2, title: "Atomic Habits" },
  { id: 3, title: "The Psychology of Money" },
];

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newBook = {
    id: books.length + 1,
    ...body,
  };
  books.push(newBook);
  return Response.json({ message: "Book added successfully", book: newBook });
}
