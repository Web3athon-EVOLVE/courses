import { BrowserMockup } from '../components/browser-mockup'
import Layout from '../components/layout'
import { Lesson } from '../components/lesson'
import { getLessonContent } from '../lib/lessons'

const Home = ({ lesson }) => {
  return (
    <Layout widthClass="max-w-4xl">
      <div className="flex flex-col items-center mb-16">
        <div className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-32 font-bold">
            Welcome, let's start learning!{' '}
          </p>
        </div>
        <div className="text-center mt-8">
          <a href="/course" className="btn btn-primary btn-big">
            Go to the course
          </a>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { lesson: await getLessonContent('01.01-first-sublesson') },
  }
}

export default Home
