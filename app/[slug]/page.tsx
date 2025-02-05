import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowLeftIcon, BookOpenIcon, TagIcon, ClockIcon, UserIcon } from "lucide-react"

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("passage"))

  return files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }))
}

function getPost({ slug }: { slug: string }) {
  try {
    const markdownFile = fs.readFileSync(path.join("passage", `${slug}.mdx`), "utf-8")
    const { data: frontMatter, content } = matter(markdownFile)
    return {
      frontMatter,
      slug,
      content,
    }
  } catch (error) {
    console.error(`Error reading file for slug: ${slug}`, error)
    return null
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params)

  if (!props || !params.slug) {
    return notFound()
  }

  const readingTime = Math.ceil(props.content.split(" ").length / 200) // Assuming 200 words per minute

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 leading-tight">{props.frontMatter.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 text-gray-400" size={16} />
              <time>{props.frontMatter.date}</time>
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-2 text-gray-400" size={16} />
              <span>{readingTime} min read</span>
            </div>
            {props.frontMatter.author && (
              <div className="flex items-center">
                <UserIcon className="mr-2 text-gray-400" size={16} />
                <span>{props.frontMatter.author}</span>
              </div>
            )}
            {props.frontMatter.tags && (
              <div className="flex items-center">
                <TagIcon className="mr-2 text-gray-400" size={16} />
                <span>{props.frontMatter.tags.join(", ")}</span>
              </div>
            )}
          </div>
        </header>
        <div className="prose prose-lg max-w-none">
          <MDXRemote
            source={props.content}
            components={{
              h1: (props) => <h1 {...props} className="text-3xl font-bold mt-12 mb-4 text-gray-900" />,
              h2: (props) => (
                <h2 {...props} className="text-2xl font-semibold mt-8 mb-4 text-gray-800 flex items-center">
                  <BookOpenIcon className="mr-2 text-gray-600" size={20} />
                  {props.children}
                </h2>
              ),
              h3: (props) => <h3 {...props} className="text-xl font-semibold mt-6 mb-3 text-gray-700" />,
              p: (props) => <p {...props} className="mb-4 text-gray-700 leading-relaxed" />,
              ul: (props) => <ul {...props} className="list-disc pl-5 mb-4 text-gray-700 space-y-2" />,
              ol: (props) => <ol {...props} className="list-decimal pl-5 mb-4 text-gray-700 space-y-2" />,
              li: (props) => <li {...props} className="mb-1" />,
              a: (props) => <a {...props} className="text-blue-600 hover:underline transition duration-200" />,
              blockquote: (props) => (
                <blockquote {...props} className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" />
              ),
              code: (props) => (
                <code {...props} className="bg-gray-100 rounded px-1 py-0.5 text-sm text-gray-800 font-mono" />
              ),
              pre: (props) => <pre {...props} className="bg-gray-100 rounded p-4 my-4 overflow-x-auto text-sm" />,
            }}
          />
        </div>
      </article>
      <div className="mt-12">
        <Button
          asChild
          variant="outline"
          className="inline-flex items-center hover:bg-gray-100 transition duration-200"
        >
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

