import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from 'lucide-react'

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
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader className="pb-8 border-b">
          <CardTitle className="text-4xl font-bold mb-4 text-gray-800">{props.frontMatter.title}</CardTitle>
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="mr-2" size={18} />
            <time className="text-sm">{props.frontMatter.date}</time>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={props.content} />
          </article>
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

