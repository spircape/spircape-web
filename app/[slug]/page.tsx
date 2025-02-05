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
    <div className="min-h-screen bg-gray-50 pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <article className="bg-white shadow-sm rounded-lg p-8">
          <header className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {props.frontMatter.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center text-sm text-gray-600 gap-6">
              <div className="flex items-center">
                <CalendarIcon className="mr-2 text-blue-500" size={18} />
                <time>{props.frontMatter.date}</time>
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-2 text-green-500" size={18} />
                <span>{readingTime} min read</span>
              </div>
              {props.frontMatter.author && (
                <div className="flex items-center">
                  <UserIcon className="mr-2 text-purple-500" size={18} />
                  <span>{props.frontMatter.author}</span>
                </div>
              )}
              {props.frontMatter.tags && (
                <div className="flex items-center">
                  <TagIcon className="mr-2 text-red-500" size={18} />
                  <span>{props.frontMatter.tags.join(", ")}</span>
                </div>
              )}
            </div>
          </header>
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={props.content}
              components={{
                h1: (props) => <h1 {...props} className="text-3xl font-bold mt-12 mb-4 text-gray-900 border-b pb-2" />,
                h2: (props) => (
                  <h2 {...props} className="text-2xl font-semibold mt-10 mb-4 text-gray-800 flex items-center">
                    <BookOpenIcon className="mr-2 text-blue-600" size={24} />
                    {props.children}
                  </h2>
                ),
                h3: (props) => <h3 {...props} className="text-xl font-semibold mt-8 mb-3 text-gray-700" />,
                p: (props) => <p {...props} className="mb-6 text-gray-700 leading-relaxed" />,
                ul: (props) => <ul {...props} className="list-disc pl-5 mb-6 text-gray-700 space-y-2" />,
                ol: (props) => <ol {...props} className="list-decimal pl-5 mb-6 text-gray-700 space-y-2" />,
                li: (props) => <li {...props} className="mb-2" />,
                a: (props) => <a {...props} className="text-blue-600 hover:underline transition duration-200" />,
                blockquote: (props) => (
                  <blockquote
                    {...props}
                    className="border-l-4 border-blue-300 pl-4 italic my-6 text-gray-600 bg-blue-50 py-2 rounded-r"
                  />
                ),
                code: (props) => (
                  <code {...props} className="bg-gray-100 rounded px-1.5 py-0.5 text-sm text-gray-800 font-mono" />
                ),
                pre: (props) => <pre {...props} className="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto text-sm" />,
              }}
            />
          </div>
        </article>
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center hover:bg-white transition duration-200 rounded-full px-6 py-3 text-blue-600 border-blue-300"
          >
            <Link href="/">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

