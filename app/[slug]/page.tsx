import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { ShareButton } from "@/components/share-button"

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("articles"))

  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const markdownWithMeta = fs.readFileSync(path.join("articles", slug + ".md"), "utf-8")

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  // Estimate read time
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="max-w-[800px] w-full px-6 py-12">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold mb-12">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        <article className="w-full">
          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">{frontMatter.title}</h1>
            {frontMatter.description && <p className="text-xl text-gray-600 mb-6">{frontMatter.description}</p>}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time>{frontMatter.date}</time>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            {frontMatter.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {frontMatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-green-700"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="w-24 h-1 bg-green-600" />
          </div>

          {/* Article Content */}
          <div
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="prose prose-lg w-full prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700 mb-12"
          />

          {/* Article Footer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Last updated: {frontMatter.date}</div>
              <ShareButton />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

