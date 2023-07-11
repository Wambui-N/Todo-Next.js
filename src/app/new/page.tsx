import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "../db";

async function createTodo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
        if (typeof title !== "string" || title.length === 0) {
            throw new Error("Invalid title")
        }

        await prisma.todo.create({ data: { title , complete: false }})
        redirect("/")
}

function Page() {
  return (
    <>
      <header className="text-2xl flex justify-between items-center mb-4">
        <h1>New</h1>
      </header>
      <form action={createTodo} className="flex  gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 text-slate-300 bg-transparent px-1 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 bg-transparent px-1 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 bg-transparent px-1 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default Page;
