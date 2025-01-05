import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CalendarIcon, ArrowLeftIcon, BookOpenIcon } from 'lucide-react'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('passage'))
  
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join('passage', slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownFile)

  return {
    frontMatter,
    slug,
    content,
  }
}

export default function Post({ params }: { params: { slug: string } }) {
  const props = getPost(params)

  if (!props) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-500">
        <div className="px-6 py-8 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {props.frontMatter.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <CalendarIcon className="mr-2 text-blue-500" size={18} />
            <time className="text-sm">{props.frontMatter.date}</time>
          </div>
          <div className="prose prose-lg max-w-none">
            <MDXRemote 
              source={props.content} 
              components={{
                h1: (props) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-gray-900 border-b-2 border-blue-200 pb-2" />,
                h2: (props) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3 text-gray-800 flex items-center"><BookOpenIcon className="mr-2 text-blue-500" size={20} />{props.children}</h2>,
                h3: (props) => <h3 {...props} className="text-xl font-semibold mt-4 mb-2 text-gray-700" />,
                p: (props) => <p {...props} className="mb-4 text-gray-700 leading-relaxed" />,
                ul: (props) => <ul {...props} className="list-disc pl-5 mb-4 text-gray-700 space-y-2" />,
                ol: (props) => <ol {...props} className="list-decimal pl-5 mb-4 text-gray-700 space-y-2" />,
                li: (props) => <li {...props} className="mb-1" />,
                a: (props) => <a {...props} className="text-blue-600 hover:underline transition duration-200" />,
                blockquote: (props) => <blockquote {...props} className="border-l-4 border-blue-300 pl-4 italic my-4 text-gray-600 bg-blue-50 py-2 rounded-r" />,
                code: (props) => <code {...props} className="bg-gray-100 rounded px-1 py-0.5 text-sm text-gray-800" />,
                pre: (props) => <pre {...props} className="bg-gray-100 rounded-lg p-4 my-4 overflow-x-auto border border-gray-200" />,
              }}
            />
          </div>
        </div>
      </article>
      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="inline-flex items-center hover:bg-blue-50 transition duration-200">
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-4 w-4 text-blue-500" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

